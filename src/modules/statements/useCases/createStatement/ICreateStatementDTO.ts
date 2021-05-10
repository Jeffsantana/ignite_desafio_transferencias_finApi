import { Statement } from "../../entities/Statement";

// export type ICreateStatementDTO =
//   Pick<
//     Statement,
//     'sender_id' |
//     'user_id' |
//     'description' |
//     'amount' |
//     'type'
//   >
enum OperationType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  TRANSFER = 'transfers'
}

interface ICreateStatementDTO {
  user_id: string,
  sender_id?: string,
  description: string,
  amount: number,
  type: OperationType
}

export { ICreateStatementDTO }