import gql from 'graphql-tag'

export default gql`
  type Ticket {
    id: Int!
    title: String
    content: String
    status: TicketStatus!
    level: TicketLevel!
    assignedTo: User
    assignedToId: Int
    createdAt: DateTime!
  }

  type Query {
    findUniqueTicket(where: TicketWhereUniqueInput!): Ticket
    findFirstTicket(
      where: TicketWhereInput
      orderBy: [TicketOrderByWithRelationInput]
      cursor: TicketWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TicketScalarFieldEnum]
    ): Ticket
    findManyTicket(
      where: TicketWhereInput
      orderBy: [TicketOrderByWithRelationInput]
      cursor: TicketWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TicketScalarFieldEnum]
    ): [Ticket!]
    findManyTicketCount(
      where: TicketWhereInput
      orderBy: [TicketOrderByWithRelationInput]
      cursor: TicketWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TicketScalarFieldEnum]
    ): Int!
    aggregateTicket(
      where: TicketWhereInput
      orderBy: [TicketOrderByWithRelationInput]
      cursor: TicketWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateTicket
  }

  type Mutation {
    createOneTicket(data: TicketCreateInput!): Ticket!
    updateOneTicket(
      data: TicketUpdateInput!
      where: TicketWhereUniqueInput!
    ): Ticket!
    deleteOneTicket(where: TicketWhereUniqueInput!): Ticket
    upsertOneTicket(
      where: TicketWhereUniqueInput!
      create: TicketCreateInput!
      update: TicketUpdateInput!
    ): Ticket
    deleteManyTicket(where: TicketWhereInput): BatchPayload
    updateManyTicket(
      data: TicketUpdateManyMutationInput!
      where: TicketWhereInput
    ): BatchPayload
  }
`
