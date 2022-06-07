export const getState = ({ setStore, getStore, getActions }) => {
    return {
        store: {

            personajes: [],
            detalleDeLosPersonajes: {},
            meGusta: [],
        },
        actions: {

            getPersonajes: () => {
                fetch("https://rickandmortyapi.com/api/character", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                }).then(response => response.json())
                    .then(data => setStore({ personajes: data.results }))
            },


            getDetallePersonajes: (index) => {
                const actions = getActions();
                var url = 'https://rickandmortyapi.com/api/character/' + index;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        actions.getData(data);
                    })
            },

            getData: (data) => {
                setStore({ detalle: data })
            },
            meGusta: (item) => {
                const store = getStore();
                setStore({ meGustaListing: [...store.meGustaListing, item] });

            },
            eliminarMeGusta: (eliminarMeGustaIndex) => {
                const store = getStore();
                //se agrega el numero 1 al splice meGusta, para asi eliminar el me gusta realizado anteriormente.
                store.eliminarMeListing.splice(eliminarMeGustaIndex, 1);
                setStore({ eliminarMeListing: store.eliminarMeGustaListing });
            },
        },
    };
};