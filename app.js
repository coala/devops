var app = angular.module('coala', ['ngSanitize'])
app.controller('subdomains', ['$scope', function ($scope) {

  $scope.subdomains = [
    {
      "name" : "Docs",
      "desc" : "The coala Documentation",
      "image" : "docs.png",
      "card_type" : "fab",
      "icon" : "library_books",
      "link" : "http://docs.coala.io"
    },
    {
      "name" : "Mail",
      "desc" : "Mail Server",
      "image" : "mail.png",
      "card_type" : "reveal",
      "reveal_text" : "The mail server powering the coala.io mailing system.",
      "icon" : "close",
      "link" : "http://mail.coala.io"
    },
    {
      "name" : "Landing",
      "desc" : "Official Website",
      "image" : "a1.png",
      "card_type" : "fab",
      "icon" : "view_quilt",
      "link" : "http://coala.io"
    },
    {
      "name" : "Mumble",
      "desc" : "coala's official Mumble server.",
      "image" : "mumble.png",
      "card_type" : "fab",
      "icon" : "speaker_phone",
      "link" : "http://mumble.coala.io"
    },
    {
      "name" : "webServices",
      "desc" : "Currently Backend of Landing, Future Powerhouse of coala Web",
      "image" : "a2.png",
      "card_type" : "fab",
      "icon" : "web",
      "link" : "http://webservices.coala.io",
      "status" : $scope.pinger("http://webservices.coala.io")
    },
    {
      "name" : "Blog",
      "desc" : "The coala blog aggregator",
      "image" : "a3.png",
      "card_type" : "fab",
      "icon" : "forum",
      "link" : "http://blog.coala.io"
    }
  ];

}])
