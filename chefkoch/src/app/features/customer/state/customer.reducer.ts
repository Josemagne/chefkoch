/**
 * Name of the feature name for the customer feature
 */
export const CustomerFeatureName = "customer"

export interface IInitialCustomerState {
    lastVisited: Date;
    /**
     * Groups together the entire state
     * for everything that is related to ordering.
     */
    order: {},
    /**
     * Contains everything related for reviewing.
     */
    review: {

    },
    /**
     * Contains all the information between the customer
     * and the restaurants.
     */
    restaurant: {

    }

}

