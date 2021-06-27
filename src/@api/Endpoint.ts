export const BASE = "api end point";

export const loginUserUrl = () => {
  return encodeURI("auth/login");
};
export const registerUserUrl = () => {
  return encodeURI("auth/user");
};
export const getSocialLoginUrl = () => {
  return encodeURI("auth/socialLogin");
};
export const getUserByIdUrl = (userId) => {
  return encodeURI("auth/user/" + userId);
};
export const getContactsUrl = (userId) => {
  return encodeURI("contacts/" + userId);
};

export const getChatsUrl = (userId) => {
  return encodeURI("contacts/" + userId);
};
export const getSearchUsersUrl = (
  usersPage,
  usersLimit,
  searchText,
  userId
) => {
  return encodeURI(
    "search-users?usersPage=" +
      usersPage +
      "&usersLimit=" +
      usersLimit +
      "&searchText=" +
      searchText +
      "&userId=" +
      userId
  );
};
export const getUserMessagesUrl = (userId, participentId, page, limit) => {
  return encodeURI(
    "userMessages?userId=" +
      userId +
      "&participentId=" +
      participentId +
      "&page=" +
      page +
      "&limit=" +
      limit
  );
};
export const updateProfileImageUrl = (userId) => {
  return encodeURI("/auth/update-image/" + userId);
};
export const seenAllMessagesUrl = () => {
  return encodeURI("seen-all-messages");
};
