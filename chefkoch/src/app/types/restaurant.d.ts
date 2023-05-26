/**
 * A restaurant is a place where customers eat
 * and the manager and cook work.
 */
interface IRestaurant {
    id: number;
    rating: number;
}

type INewRestaurant = Omit<IRestaurant, "id">