export default class Service {

    constructor(entity, url) {
        this.url = url;
        this.entity = entity;
        this.entityUrl = `${this.url}/${this.entity}`;
    }

    getUrl(id) {
        if (!id) {
            return this.entityUrl;
        }
        return `${this.url}/${this.entity}/${id}`;
    }

    list() {
        return fetch(this.entityUrl)
            .then(function (res) {
                if (!res.ok) throw new Error(`Error on GET ${this.entity} | status: ${res.status}`);
                return res.json();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    get(id) {
        return fetch(this.getUrl(id))
            .then(function (res) {
                if (!res.ok) throw new Error(`Error on GET ${this.entity} | status: ${res.status}`);
                return res.json();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    add(data) {
        return fetch(this.entityUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) throw new Error(`Error on POST ${this.entity} | status: ${res.status}`);

                const location = res.headers.get("Location");

                return res.status === 204 ? true : res.json().then(data => ({
                    data,
                    location
                }));
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    update(id, data) {
        return fetch(this.getUrl(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) throw new Error(`Error on PUT ${this.entity} | status: ${res.status}`);
                return res.status === 204 ? true : res.json();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    delete(id) {
        return fetch(this.getUrl(id), {
            method: "DELETE"
        })
            .then(res => {
                if (!res.ok) throw new Error(`Error on DELETE ${this.entity} | status: ${res.status}`);
                return res.status === 204 ? true : res.json();
            })
            .catch(function (err) {
                console.log(err);
            });
    }

}