import axios from "axios";

// Set the BASEURL to point at the randomuser API to return 100 records
const BASEURL = "https://randomuser.me/api/?inc=name,email,picture,cell,id&nat=us&results=100";

// Export an object with a "search" method that searches the randomuser API
const API = {
  search: function() {
    return axios.get(BASEURL);
  }
};

export default API;
