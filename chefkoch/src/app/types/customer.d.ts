interface ICustomer {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}

/**
 * This is ICustomer without
 * id.
 * We use it when we create a class in the client side
 */
type INewCustomer = Omit<ICustomer, "id">