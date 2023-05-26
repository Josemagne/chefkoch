interface IReview {
    id: number;
    /**
     * The id of the customer who
     * wrote the text
     */
    customerId: number;
    restaurantId: number;
    title: string;
    text: string;
    /**
     * Decides if the review is admitted.
     */
    admitted: boolean;
}

type INewReview = Omit<IReview, "id">