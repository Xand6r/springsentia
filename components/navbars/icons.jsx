export const UserIcon = ({active}) => (
    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 22C0 19.7772 0.895533 17.6455 2.48959 16.0738C4.08365 14.502 6.24566 13.619 8.5 13.619C10.7543 13.619 12.9163 14.502 14.5104 16.0738C16.1045 17.6455 17 19.7772 17 22H14.875C14.875 20.3329 14.2034 18.7341 13.0078 17.5553C11.8123 16.3765 10.1908 15.7143 8.5 15.7143C6.80925 15.7143 5.18774 16.3765 3.99219 17.5553C2.79665 18.7341 2.125 20.3329 2.125 22H0ZM8.5 12.5714C4.97781 12.5714 2.125 9.75857 2.125 6.28571C2.125 2.81286 4.97781 0 8.5 0C12.0222 0 14.875 2.81286 14.875 6.28571C14.875 9.75857 12.0222 12.5714 8.5 12.5714ZM8.5 10.4762C10.8481 10.4762 12.75 8.60095 12.75 6.28571C12.75 3.97048 10.8481 2.09524 8.5 2.09524C6.15188 2.09524 4.25 3.97048 4.25 6.28571C4.25 8.60095 6.15188 10.4762 8.5 10.4762Z" fill={active ? "#8FB685" : "#333333"}/>
    </svg>
);


export const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3615 15.8302L22 20.4676L20.4676 22L15.8302 17.3615C14.1047 18.7448 11.9585 19.4971 9.74697 19.4939C4.36664 19.4939 0 15.1273 0 9.74697C0 4.36664 4.36664 0 9.74697 0C15.1273 0 19.4939 4.36664 19.4939 9.74697C19.4971 11.9585 18.7448 14.1047 17.3615 15.8302ZM15.189 15.0266C16.5635 13.6131 17.3311 11.7185 17.328 9.74697C17.328 5.55794 13.9349 2.16599 9.74697 2.16599C5.55794 2.16599 2.16599 5.55794 2.16599 9.74697C2.16599 13.9349 5.55794 17.328 9.74697 17.328C11.7185 17.3311 13.6131 16.5635 15.0266 15.189L15.189 15.0266Z" fill="#333333"/>
    </svg>
)

export const LikeIcon = () => (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9863 0C18.0243 0 20.4863 2.5 20.4863 6C20.4863 13 12.9863 17 10.4863 18.5C7.98633 17 0.486328 13 0.486328 6C0.486328 2.5 2.98633 0 5.98633 0C7.84633 0 9.48633 1 10.4863 2C11.4863 1 13.1263 0 14.9863 0ZM11.4203 15.604C12.3013 15.048 13.0963 14.495 13.8403 13.903C16.8213 11.533 18.4863 8.943 18.4863 6C18.4863 3.64 16.9493 2 14.9863 2C13.9103 2 12.7463 2.57 11.9003 3.414L10.4863 4.828L9.07233 3.414C8.22633 2.57 7.06233 2 5.98633 2C4.04633 2 2.48633 3.656 2.48633 6C2.48633 8.944 4.15233 11.533 7.13133 13.903C7.87633 14.495 8.67133 15.048 9.55233 15.603C9.85133 15.792 10.1473 15.973 10.4863 16.175C10.8253 15.973 11.1213 15.792 11.4203 15.604Z" fill="#333333"/>
    </svg>
)

export const CartIcon = () => (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.72933 4.657L0.486328 1.415L1.90133 0L5.14333 3.243H20.3853C20.5412 3.24299 20.6949 3.27941 20.8342 3.34937C20.9735 3.41932 21.0945 3.52086 21.1876 3.6459C21.2806 3.77093 21.3432 3.91598 21.3702 4.06949C21.3973 4.22299 21.3881 4.38069 21.3433 4.53L18.9433 12.53C18.8816 12.7361 18.755 12.9168 18.5824 13.0452C18.4099 13.1737 18.2005 13.243 17.9853 13.243H5.72933V15.243H16.7293V17.243H4.72933C4.46411 17.243 4.20976 17.1376 4.02222 16.9501C3.83469 16.7626 3.72933 16.5082 3.72933 16.243V4.657ZM5.72933 5.243V11.243H17.2413L19.0413 5.243H5.72933ZM5.22933 21.243C4.8315 21.243 4.44997 21.085 4.16867 20.8037C3.88736 20.5224 3.72933 20.1408 3.72933 19.743C3.72933 19.3452 3.88736 18.9636 4.16867 18.6823C4.44997 18.401 4.8315 18.243 5.22933 18.243C5.62715 18.243 6.00868 18.401 6.28999 18.6823C6.57129 18.9636 6.72933 19.3452 6.72933 19.743C6.72933 20.1408 6.57129 20.5224 6.28999 20.8037C6.00868 21.085 5.62715 21.243 5.22933 21.243ZM17.2293 21.243C16.8315 21.243 16.45 21.085 16.1687 20.8037C15.8874 20.5224 15.7293 20.1408 15.7293 19.743C15.7293 19.3452 15.8874 18.9636 16.1687 18.6823C16.45 18.401 16.8315 18.243 17.2293 18.243C17.6272 18.243 18.0087 18.401 18.29 18.6823C18.5713 18.9636 18.7293 19.3452 18.7293 19.743C18.7293 20.1408 18.5713 20.5224 18.29 20.8037C18.0087 21.085 17.6272 21.243 17.2293 21.243Z" fill="#333333"/>
</svg>

)
