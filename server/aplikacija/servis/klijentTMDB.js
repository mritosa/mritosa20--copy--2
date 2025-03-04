class TMDBklijent {
	bazicniURL = "https://api.themoviedb.org/3";
	constructor(apiKljuc) {
		this.apiKljuc = apiKljuc;
	}
	async dohvatiSerije() {
		let resurs = "/tv/";
		let odgovor = await this.obaviZahtjev(resurs);
		return odgovor;
	}

	async pretraziSerijePoNazivu(stranica, trazi) {
		let resurs = "/search/tv";
		let parametri = {
			page: stranica,
			query: trazi,
		};

		let odgovor = await this.obaviZahtjev(resurs, parametri);
		console.log(odgovor);
		return odgovor;
	}

	async dohvatiDetaljeSerije(tmdb_id) {
		console.log(tmdb_id);
		let resurs = "/tv/" + tmdb_id;
		let odgovor = await this.obaviZahtjev(resurs);
		return odgovor;
	}

	async obaviZahtjev(resurs, parametri = "") {
		let zahtjev = this.bazicniURL + resurs + "?api_key=" + this.apiKljuc;
		for (let p in parametri) {
			zahtjev += "&" + p + "=" + parametri[p];
		}
		console.log(zahtjev);
		let odgovor = await fetch(zahtjev);
		let rezultat = await odgovor.text();
		return rezultat;
	}
}

module.exports = TMDBklijent;
