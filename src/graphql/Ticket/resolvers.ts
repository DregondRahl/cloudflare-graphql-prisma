import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.findUnique(args)
    },
    findFirstTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.findFirst(args)
    },
    findManyTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.findMany(args)
    },
    findManyTicketCount: (_parent, args, { prisma }) => {
      return prisma.ticket.count(args)
    },
    aggregateTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.aggregate(args)
    },
  },
  Mutation: {
    createOneTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.create(args)
    },
    updateOneTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.update(args)
    },
    deleteOneTicket: async (_parent, args, { prisma }) => {
      return prisma.ticket.delete(args)
    },
    upsertOneTicket: async (_parent, args, { prisma }) => {
      return prisma.ticket.upsert(args)
    },
    deleteManyTicket: async (_parent, args, { prisma }) => {
      return prisma.ticket.deleteMany(args)
    },
    updateManyTicket: (_parent, args, { prisma }) => {
      return prisma.ticket.updateMany(args)
    },
  },
}
export default resolvers
