(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{21:function(e,a,t){e.exports=t(48)},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),o=t(3),c=t.n(o),m=t(14),l=t(15),u=t(16),d=t(19),v=t(17),p=t(20),y=t(18),g=t.n(y),_=t(2),f=t.n(_);t(46);function E(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"moviee__year"},a),r.a.createElement("ul",{className:"genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summray"},n.slice(0,140),"...")))}E.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var h=E,b=(t(47),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(d.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.loadMovies=Object(m.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,n=a.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},'"Loading..."')):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c9b5418e.chunk.js.map