import axios from "axios";

import "./data-mock";

const server = "http://localhost:3000";
const api = axios.create({
  baseURL: server,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

function makeCancelable(promise) {
  let hasCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val =>
        hasCanceled ? reject(new Error({ isCanceled: true })) : resolve(val),
      err =>
        hasCanceled ? reject(new Error({ isCanceled: true })) : reject(err)
    );
  });
  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    }
  };
}
// get all tweets
export function getTweets() {
  return makeCancelable(api.get("/tweets"));
}

export function getUserById(userId) {
  return makeCancelable(api.get(`/user?id=${userId}`));
}

/**
 *
 * @param {String} name user name
 */
export function getUserByName(name) {
  return new Promise((resolve, reject) => {
    api
      .get(`/user?name=${name}`)
      .then(user => resolve(user.data))
      .catch(err => reject(err));
  });
}
// explore page, get global trendings
export function getGlobalTrends() {
  return makeCancelable(api.get("/trends?limit=5"));
}
// get all trends
export function getTrends() {
  return makeCancelable(api.get("/trends"));
}
/**
 * return recommending following users
 * @param {number} limit the number of users of returned, default 20.
 */
export function getRelatedUsers(limit) {
  const url = limit ? `/relatedusers?limit=${limit}` : "/relatedusers";
  return makeCancelable(api.get(url));
}

export function getEvent() {
  const url = "/bigevent";
  return makeCancelable(api.get(url));
}
export function getNewEvents() {
  const url = "/newevents";
  return makeCancelable(api.get(url));
}
export function getRecommendUsers() {
  const url = "/recommendusers";
  return makeCancelable(api.get(url));
}
export function getPopularArticles() {
  const url = "/populararticles";
  return makeCancelable(api.get(url));
}
export function getSearchRecommend(query) {
  const url = `/searchrecommend?query=${query}`;
  return makeCancelable(api.get(url));
}
export function getNotifications() {
  const url = "/notifications";
  return makeCancelable(api.get(url));
}
export function searchHot() {
  const url = "/searchhot";
  return makeCancelable(api.get(url));
}
export function getRecommendScreenName() {
  const url = "/recommendscreenname";
  return makeCancelable(api.get(url));
}
export function getRecommendFollowings() {
  const url = "/recommendfollowings";
  return makeCancelable(api.get(url));
}
