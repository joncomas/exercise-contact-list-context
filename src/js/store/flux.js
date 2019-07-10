const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			listContacts: []
		},
		actions: {
			addToSotage: (url, contact) => {
				fetch(url, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(addQuery => {
						if (addQuery["msg"] !== undefined) {
							setStore({ listContacts: [] });
							alert(addQuery.msg);
						} else {
							setStore({ listContacts: addQuery });
						}
					});
			},

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			updateStore: url => {
				fetch(url)
					.then(res => res.json())
					.then(newQuery => {
						console.log("FLUXXXXXXXXXXX", newQuery);
						setStore({ listContacts: newQuery });
					});
			}
		}
	};
};

export default getState;
