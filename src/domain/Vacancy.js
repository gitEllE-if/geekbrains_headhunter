export class Vacancy {
    constructor(provider, origin_id, name, logo_url, salary, currency,
        published_at, area, requirement, responsibility, pinned) {
        this.provider = provider;
        this.origin_id = origin_id;
        this.name = name;
        this.logo_url = logo_url;
        this.salary = salary;
        this.currency = currency;
        this.published_at = published_at;
        this.area = area;
        this.requirement = requirement;
        this.responsibility = responsibility;
        this.pinned = pinned;
    }

    getProvider() {
        return this.provider;
    }

    isProvidedBy(providerName) {
        return this.provider === providerName
    }
}