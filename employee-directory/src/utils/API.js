import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";
// Export an object with a "search" method that searches the randomuser API
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
