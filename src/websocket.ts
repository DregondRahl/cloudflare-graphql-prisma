import { makeServer, MessageType, stringifyMessage } from "graphql-ws";

const useWebsocket = (schema, context, socket, request, protocol) => {
  const server = makeServer({ schema, context });

  socket.accept();

  let pinger, pongWait;
  function ping() {
    if (socket.readyState === socket.OPEN) {
      socket.send(stringifyMessage({ type: MessageType.Ping }));
      pongWait = setTimeout(() => {
        clearInterval(pinger);
        socket.close();
      }, 6000);
    }
  }

  pinger = setInterval(() => ping(), 12000);

  const closed = server.opened(
    {
      protocol, // will be validated
      send: (data) => socket.send(data),
      close: (code, reason) => socket.close(code, reason),
      onMessage: (cb) =>
        socket.addEventListener("message", async (event) => {
          try {
            await cb(event.data);
          } catch (err) {
            socket.close(1011, err.message);
          }
        }),
      onPong: () => clearTimeout(pongWait),
    },
    { socket, request }
  );

  socket.addEventListener("close", (code, reason) => {
    clearTimeout(pongWait);
    clearInterval(pinger);
    closed(code, reason);
  });
};

export default useWebsocket