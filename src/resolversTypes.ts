import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  Ticket?: Ticket
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateTicket?: AggregateTicket
  TicketGroupByOutputType?: TicketGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType
  UserSumAggregateOutputType?: UserSumAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  TicketCountAggregateOutputType?: TicketCountAggregateOutputType
  TicketAvgAggregateOutputType?: TicketAvgAggregateOutputType
  TicketSumAggregateOutputType?: TicketSumAggregateOutputType
  TicketMinAggregateOutputType?: TicketMinAggregateOutputType
  TicketMaxAggregateOutputType?: TicketMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, number>
  email?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string | null>
  createdAt?: Resolver<Client.User, {}, Date>
  tickets?: Resolver<Client.User, UserTicketsArgs, Client.Ticket[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export interface Ticket {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Ticket, {}, number>
  title?: Resolver<Client.Ticket, {}, string | null>
  content?: Resolver<Client.Ticket, {}, string | null>
  status?: Resolver<Client.Ticket, {}, Client.TicketStatus>
  level?: Resolver<Client.Ticket, {}, Client.TicketLevel>
  assignedTo?: Resolver<Client.Ticket, {}, Client.User | null>
  assignedToId?: Resolver<Client.Ticket, {}, number | null>
  createdAt?: Resolver<Client.Ticket, {}, Date>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstTicket?: Resolver<{}, FindFirstTicketArgs, Client.Ticket | null>
  findManyTicket?: Resolver<{}, FindManyTicketArgs, Client.Ticket[]>
  findManyTicketCount?: Resolver<{}, FindManyTicketArgs, number>
  aggregateTicket?: Resolver<
    {},
    AggregateTicketArgs,
    Client.Prisma.GetTicketAggregateType<AggregateTicketArgs>
  >
  groupByTicket?: Resolver<
    {},
    GroupByTicketArgs,
    Client.Prisma.TicketGroupByOutputType[]
  >
  findUniqueTicket?: Resolver<{}, FindUniqueTicketArgs, Client.Ticket | null>
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneTicket?: Resolver<{}, CreateOneTicketArgs, Client.Ticket>
  upsertOneTicket?: Resolver<{}, UpsertOneTicketArgs, Client.Ticket>
  createManyTicket?: Resolver<
    {},
    CreateManyTicketArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneTicket?: Resolver<{}, DeleteOneTicketArgs, Client.Ticket | null>
  updateOneTicket?: Resolver<{}, UpdateOneTicketArgs, Client.Ticket | null>
  updateManyTicket?: Resolver<
    {},
    UpdateManyTicketArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyTicket?: Resolver<
    {},
    DeleteManyTicketArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregateTicket {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateTicket,
    {},
    Client.Prisma.TicketMaxAggregateOutputType | null
  >
}

export interface TicketGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, number>
  title?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, string | null>
  content?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, string | null>
  status?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.TicketStatus
  >
  level?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.TicketLevel
  >
  assignedToId?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<Client.Prisma.TicketGroupByOutputType, {}, Date>
  _count?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.TicketGroupByOutputType,
    {},
    Client.Prisma.TicketMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>
  tickets?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface TicketCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
  title?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
  content?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
  status?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
  level?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
  assignedToId?: Resolver<
    Client.Prisma.TicketCountAggregateOutputType,
    {},
    number
  >
  createdAt?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.TicketCountAggregateOutputType, {}, number>
}

export interface TicketAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TicketAvgAggregateOutputType, {}, number | null>
  assignedToId?: Resolver<
    Client.Prisma.TicketAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface TicketSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TicketSumAggregateOutputType, {}, number | null>
  assignedToId?: Resolver<
    Client.Prisma.TicketSumAggregateOutputType,
    {},
    number | null
  >
}

export interface TicketMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TicketMinAggregateOutputType, {}, number | null>
  title?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    string | null
  >
  content?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    string | null
  >
  status?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    Client.TicketStatus | null
  >
  level?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    Client.TicketLevel | null
  >
  assignedToId?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.TicketMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface TicketMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.TicketMaxAggregateOutputType, {}, number | null>
  title?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    string | null
  >
  content?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    string | null
  >
  status?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    Client.TicketStatus | null
  >
  level?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    Client.TicketLevel | null
  >
  assignedToId?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.TicketMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface UserTicketsArgs {
  where?: TicketWhereInput | null
  orderBy?: TicketOrderByWithRelationInput[] | null
  cursor?: TicketWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: TicketScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _avg?: Client.Prisma.UserAvgAggregateInputType
  _sum?: Client.Prisma.UserSumAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstTicketArgs {
  where?: TicketWhereInput | null
  orderBy?: TicketOrderByWithRelationInput[] | null
  cursor?: TicketWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: TicketScalarFieldEnum[] | null
}

export interface FindManyTicketArgs {
  where?: TicketWhereInput
  orderBy?: TicketOrderByWithRelationInput[]
  cursor?: TicketWhereUniqueInput
  take?: number
  skip?: number
  distinct?: TicketScalarFieldEnum[]
}

export interface AggregateTicketArgs {
  where?: TicketWhereInput
  orderBy?: TicketOrderByWithRelationInput[]
  cursor?: TicketWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.TicketCountAggregateInputType
  _avg?: Client.Prisma.TicketAvgAggregateInputType
  _sum?: Client.Prisma.TicketSumAggregateInputType
  _min?: Client.Prisma.TicketMinAggregateInputType
  _max?: Client.Prisma.TicketMaxAggregateInputType
}

export interface GroupByTicketArgs {
  where?: TicketWhereInput
  orderBy?: TicketOrderByWithAggregationInput[]
  by: TicketScalarFieldEnum[]
  having?: TicketScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueTicketArgs {
  where: TicketWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOneTicketArgs {
  data: TicketCreateInput
}

export interface UpsertOneTicketArgs {
  where: TicketWhereUniqueInput
  create: TicketCreateInput
  update: TicketUpdateInput
}

export interface CreateManyTicketArgs {
  data: TicketCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneTicketArgs {
  where: TicketWhereUniqueInput | null
}

export interface UpdateOneTicketArgs {
  data: TicketUpdateInput | null
  where: TicketWhereUniqueInput | null
}

export interface UpdateManyTicketArgs {
  data: TicketUpdateManyMutationInput
  where?: TicketWhereInput
}

export interface DeleteManyTicketArgs {
  where?: TicketWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: IntFilter
  email?: StringFilter
  name?: StringNullableFilter | null
  createdAt?: DateTimeFilter
  tickets?: TicketListRelationFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  tickets?: TicketOrderByRelationAggregateInput
}

export interface UserWhereUniqueInput {
  id?: number
  email?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _avg?: UserAvgOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
  _sum?: UserSumOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  email?: StringWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
  createdAt?: DateTimeWithAggregatesFilter
}

export interface TicketWhereInput {
  AND?: TicketWhereInput[]
  OR?: TicketWhereInput[]
  NOT?: TicketWhereInput[]
  id?: IntFilter
  title?: StringNullableFilter | null
  content?: StringNullableFilter | null
  status?: EnumTicketStatusFilter
  level?: EnumTicketLevelFilter
  assignedTo?: UserWhereInput | null
  assignedToId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
}

export interface TicketOrderByWithRelationInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  status?: SortOrder
  level?: SortOrder
  assignedTo?: UserOrderByWithRelationInput
  assignedToId?: SortOrder
  createdAt?: SortOrder
}

export interface TicketWhereUniqueInput {
  id?: number
}

export interface TicketOrderByWithAggregationInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  status?: SortOrder
  level?: SortOrder
  assignedToId?: SortOrder
  createdAt?: SortOrder
  _count?: TicketCountOrderByAggregateInput
  _avg?: TicketAvgOrderByAggregateInput
  _max?: TicketMaxOrderByAggregateInput
  _min?: TicketMinOrderByAggregateInput
  _sum?: TicketSumOrderByAggregateInput
}

export interface TicketScalarWhereWithAggregatesInput {
  AND?: TicketScalarWhereWithAggregatesInput[]
  OR?: TicketScalarWhereWithAggregatesInput[]
  NOT?: TicketScalarWhereWithAggregatesInput[]
  id?: IntWithAggregatesFilter
  title?: StringNullableWithAggregatesFilter | null
  content?: StringNullableWithAggregatesFilter | null
  status?: EnumTicketStatusWithAggregatesFilter
  level?: EnumTicketLevelWithAggregatesFilter
  assignedToId?: IntNullableWithAggregatesFilter | null
  createdAt?: DateTimeWithAggregatesFilter
}

export interface UserCreateInput {
  email: string
  name?: string | null
  createdAt?: Date
  tickets?: TicketCreateNestedManyWithoutAssignedToInput
}

export interface UserUncheckedCreateInput {
  id?: number
  email: string
  name?: string | null
  createdAt?: Date
  tickets?: TicketUncheckedCreateNestedManyWithoutAssignedToInput
}

export interface UserUpdateInput {
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  tickets?: TicketUpdateManyWithoutAssignedToInput
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  tickets?: TicketUncheckedUpdateManyWithoutAssignedToInput
}

export interface UserCreateManyInput {
  id?: number
  email: string
  name?: string | null
  createdAt?: Date
}

export interface UserUpdateManyMutationInput {
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface TicketCreateInput {
  title?: string | null
  content?: string | null
  status: TicketStatus
  level: TicketLevel
  createdAt?: Date
  assignedTo?: UserCreateNestedOneWithoutTicketsInput
}

export interface TicketUncheckedCreateInput {
  id?: number
  title?: string | null
  content?: string | null
  status: TicketStatus
  level: TicketLevel
  assignedToId?: number | null
  createdAt?: Date
}

export interface TicketUpdateInput {
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  assignedTo?: UserUpdateOneWithoutTicketsInput
}

export interface TicketUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  assignedToId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface TicketCreateManyInput {
  id?: number
  title?: string | null
  content?: string | null
  status: TicketStatus
  level: TicketLevel
  assignedToId?: number | null
  createdAt?: Date
}

export interface TicketUpdateManyMutationInput {
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface TicketUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  assignedToId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface IntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface TicketListRelationFilter {
  every?: TicketWhereInput
  some?: TicketWhereInput
  none?: TicketWhereInput
}

export interface TicketOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
}

export interface UserAvgOrderByAggregateInput {
  id?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  email?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
}

export interface UserSumOrderByAggregateInput {
  id?: SortOrder
}

export interface IntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface EnumTicketStatusFilter {
  equals?: TicketStatus
  in?: TicketStatus[]
  notIn?: TicketStatus[]
  not?: NestedEnumTicketStatusFilter
}

export interface EnumTicketLevelFilter {
  equals?: TicketLevel
  in?: TicketLevel[]
  notIn?: TicketLevel[]
  not?: NestedEnumTicketLevelFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export interface IntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface TicketCountOrderByAggregateInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  status?: SortOrder
  level?: SortOrder
  assignedToId?: SortOrder
  createdAt?: SortOrder
}

export interface TicketAvgOrderByAggregateInput {
  id?: SortOrder
  assignedToId?: SortOrder
}

export interface TicketMaxOrderByAggregateInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  status?: SortOrder
  level?: SortOrder
  assignedToId?: SortOrder
  createdAt?: SortOrder
}

export interface TicketMinOrderByAggregateInput {
  id?: SortOrder
  title?: SortOrder
  content?: SortOrder
  status?: SortOrder
  level?: SortOrder
  assignedToId?: SortOrder
  createdAt?: SortOrder
}

export interface TicketSumOrderByAggregateInput {
  id?: SortOrder
  assignedToId?: SortOrder
}

export interface EnumTicketStatusWithAggregatesFilter {
  equals?: TicketStatus
  in?: TicketStatus[]
  notIn?: TicketStatus[]
  not?: NestedEnumTicketStatusWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumTicketStatusFilter
  _max?: NestedEnumTicketStatusFilter
}

export interface EnumTicketLevelWithAggregatesFilter {
  equals?: TicketLevel
  in?: TicketLevel[]
  notIn?: TicketLevel[]
  not?: NestedEnumTicketLevelWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumTicketLevelFilter
  _max?: NestedEnumTicketLevelFilter
}

export interface IntNullableWithAggregatesFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _avg?: NestedFloatNullableFilter
  _sum?: NestedIntNullableFilter
  _min?: NestedIntNullableFilter
  _max?: NestedIntNullableFilter
}

export interface TicketCreateNestedManyWithoutAssignedToInput {
  create?: TicketCreateWithoutAssignedToInput[]
  connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput[]
  createMany?: TicketCreateManyAssignedToInputEnvelope
  connect?: TicketWhereUniqueInput[]
}

export interface TicketUncheckedCreateNestedManyWithoutAssignedToInput {
  create?: TicketCreateWithoutAssignedToInput[]
  connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput[]
  createMany?: TicketCreateManyAssignedToInputEnvelope
  connect?: TicketWhereUniqueInput[]
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface TicketUpdateManyWithoutAssignedToInput {
  create?: TicketCreateWithoutAssignedToInput[]
  connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput[]
  upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
  createMany?: TicketCreateManyAssignedToInputEnvelope
  set?: TicketWhereUniqueInput[]
  disconnect?: TicketWhereUniqueInput[]
  delete?: TicketWhereUniqueInput[]
  connect?: TicketWhereUniqueInput[]
  update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
  updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput[]
  deleteMany?: TicketScalarWhereInput[]
}

export interface IntFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface TicketUncheckedUpdateManyWithoutAssignedToInput {
  create?: TicketCreateWithoutAssignedToInput[]
  connectOrCreate?: TicketCreateOrConnectWithoutAssignedToInput[]
  upsert?: TicketUpsertWithWhereUniqueWithoutAssignedToInput[]
  createMany?: TicketCreateManyAssignedToInputEnvelope
  set?: TicketWhereUniqueInput[]
  disconnect?: TicketWhereUniqueInput[]
  delete?: TicketWhereUniqueInput[]
  connect?: TicketWhereUniqueInput[]
  update?: TicketUpdateWithWhereUniqueWithoutAssignedToInput[]
  updateMany?: TicketUpdateManyWithWhereWithoutAssignedToInput[]
  deleteMany?: TicketScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutTicketsInput {
  create?: UserUncheckedCreateWithoutTicketsInput
  connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
  connect?: UserWhereUniqueInput
}

export interface EnumTicketStatusFieldUpdateOperationsInput {
  set?: TicketStatus
}

export interface EnumTicketLevelFieldUpdateOperationsInput {
  set?: TicketLevel
}

export interface UserUpdateOneWithoutTicketsInput {
  create?: UserUncheckedCreateWithoutTicketsInput
  connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
  upsert?: UserUpsertWithoutTicketsInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutTicketsInput
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedIntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface NestedFloatFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface NestedEnumTicketStatusFilter {
  equals?: TicketStatus
  in?: TicketStatus[]
  notIn?: TicketStatus[]
  not?: NestedEnumTicketStatusFilter
}

export interface NestedEnumTicketLevelFilter {
  equals?: TicketLevel
  in?: TicketLevel[]
  notIn?: TicketLevel[]
  not?: NestedEnumTicketLevelFilter
}

export interface NestedEnumTicketStatusWithAggregatesFilter {
  equals?: TicketStatus
  in?: TicketStatus[]
  notIn?: TicketStatus[]
  not?: NestedEnumTicketStatusWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumTicketStatusFilter
  _max?: NestedEnumTicketStatusFilter
}

export interface NestedEnumTicketLevelWithAggregatesFilter {
  equals?: TicketLevel
  in?: TicketLevel[]
  notIn?: TicketLevel[]
  not?: NestedEnumTicketLevelWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumTicketLevelFilter
  _max?: NestedEnumTicketLevelFilter
}

export interface NestedIntNullableWithAggregatesFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _avg?: NestedFloatNullableFilter
  _sum?: NestedIntNullableFilter
  _min?: NestedIntNullableFilter
  _max?: NestedIntNullableFilter
}

export interface NestedFloatNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatNullableFilter | null
}

export interface TicketCreateWithoutAssignedToInput {
  title?: string | null
  content?: string | null
  status: TicketStatus
  level: TicketLevel
  createdAt?: Date
}

export interface TicketUncheckedCreateWithoutAssignedToInput {
  id?: number
  title?: string | null
  content?: string | null
  status: TicketStatus
  level: TicketLevel
  createdAt?: Date
}

export interface TicketCreateOrConnectWithoutAssignedToInput {
  where: TicketWhereUniqueInput
  create: TicketUncheckedCreateWithoutAssignedToInput
}

export interface TicketCreateManyAssignedToInputEnvelope {
  data: TicketCreateManyAssignedToInput[]
  skipDuplicates?: boolean
}

export interface TicketUpsertWithWhereUniqueWithoutAssignedToInput {
  where: TicketWhereUniqueInput
  update: TicketUncheckedUpdateWithoutAssignedToInput
  create: TicketUncheckedCreateWithoutAssignedToInput
}

export interface TicketUpdateWithWhereUniqueWithoutAssignedToInput {
  where: TicketWhereUniqueInput
  data: TicketUncheckedUpdateWithoutAssignedToInput
}

export interface TicketUpdateManyWithWhereWithoutAssignedToInput {
  where: TicketScalarWhereInput
  data: TicketUncheckedUpdateManyWithoutTicketsInput
}

export interface TicketScalarWhereInput {
  AND?: TicketScalarWhereInput[]
  OR?: TicketScalarWhereInput[]
  NOT?: TicketScalarWhereInput[]
  id?: IntFilter
  title?: StringNullableFilter | null
  content?: StringNullableFilter | null
  status?: EnumTicketStatusFilter
  level?: EnumTicketLevelFilter
  assignedToId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
}

export interface UserCreateWithoutTicketsInput {
  email: string
  name?: string | null
  createdAt?: Date
}

export interface UserUncheckedCreateWithoutTicketsInput {
  id?: number
  email: string
  name?: string | null
  createdAt?: Date
}

export interface UserCreateOrConnectWithoutTicketsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutTicketsInput
}

export interface UserUpsertWithoutTicketsInput {
  update: UserUncheckedUpdateWithoutTicketsInput
  create: UserUncheckedCreateWithoutTicketsInput
}

export interface UserUpdateWithoutTicketsInput {
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateWithoutTicketsInput {
  id?: IntFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface TicketCreateManyAssignedToInput {
  id?: number
  title?: string | null
  content?: string | null
  status: TicketStatus
  level: TicketLevel
  createdAt?: Date
}

export interface TicketUpdateWithoutAssignedToInput {
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface TicketUncheckedUpdateWithoutAssignedToInput {
  id?: IntFieldUpdateOperationsInput
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export interface TicketUncheckedUpdateManyWithoutTicketsInput {
  id?: IntFieldUpdateOperationsInput
  title?: NullableStringFieldUpdateOperationsInput | null
  content?: NullableStringFieldUpdateOperationsInput | null
  status?: EnumTicketStatusFieldUpdateOperationsInput
  level?: EnumTicketLevelFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
}

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  createdAt = 'createdAt',
}
export enum TicketScalarFieldEnum {
  id = 'id',
  title = 'title',
  content = 'content',
  status = 'status',
  level = 'level',
  assignedToId = 'assignedToId',
  createdAt = 'createdAt',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum TicketStatus {
  NEW = 'NEW',
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}
export enum TicketLevel {
  LOW = 'LOW',
  STANDARD = 'STANDARD',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}
