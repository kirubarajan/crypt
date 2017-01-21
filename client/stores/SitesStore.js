import { EventEmitter } from 'events';

class SiteStore extends EventEmitter {
  constructor() {
    super();
    this.sites = [];
  }

  createSite(sites) {
    this.sites = sites;
    this.emit('change');
  }

  createCurrentSite(id) {
    this.currentsite = id;
  }

  getAll() {
    return this.sites;
  }

  findCurrent() {
    for (let i = 0; i < this.sites.length; i++) {
      if (this.sites[i]._id === this.currentsite) {
        console.log('this is the current site', this.sites[i]);
        return this.sites[i];
      }
    }

  }
}

const siteStore = new SiteStore;
window.siteStore = siteStore;
export default siteStore;
