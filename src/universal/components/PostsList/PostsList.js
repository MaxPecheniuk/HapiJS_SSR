"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_apollo_1 = require("react-apollo");
var posts_query_1 = require("../../queries/posts.query");
var PostItem_1 = require("../PostItem/PostItem");
{
    CommentTypes;
}
from;
'../PostComments/PostComments';
require("./PostsList.scss");
exports.PostsList = function (props) {
    var variables;
    if (props.location.search !== '') {
        variables = { 'title': decodeURIComponent(props.location.search.replace('?search=', '')).toLowerCase() };
    }
    console.log('list');
    return (react_1.default.createElement("div", { className: "posts-list" },
        react_1.default.createElement(react_apollo_1.Query, { query: posts_query_1.GET_POSTS, variables: variables }, function (_a) {
            var data = _a.data, loading = _a.loading, error = _a.error;
            if (loading)
                return null;
            if (error)
                return react_1.default.createElement("div", null, "Error");
            return (data.posts.map(function (post, i) {
                return react_1.default.createElement(PostItem_1.default, { postId: post.id, key: i });
            }));
        })));
};
exports.default = exports.PostsList;
//# sourceMappingURL=PostsList.js.map