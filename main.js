var app = new Vue({
	el: "#app",
	data: {

		books: [],
		image: [],
		message: "",


	},
	created: function () {
		this.getData();
	},

	computed: {
		filteredBooks: function () {
			return this.books.filter((book) => {

				return book.title.match(this.message)
			});
		}
	},
	methods: {
		getData: function () {
			var fetchConfig =
				fetch("https://api.myjson.com/bins/zyv02", {
					method: "GET",
					headers: new Headers({})
				}).then(function (response) {
					if (response.ok) {
						return response.json();
					}
				}).then(function (json) {
					console.log("My json", json)

					app.books = json.books;
					console.log(app.books);

				})
				.catch(function (error) {
					console.log(error);
				})
		}
	}
})