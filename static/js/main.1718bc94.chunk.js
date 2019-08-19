(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),s=a(1),l=a(2),c=a(4),m=a(3),u=a(5),h=a(8),d=a(7),p=a(11),g=a.n(p),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={fadedIn:!1},e.fadeIn?(a.ref=i.a.createRef(),a.triggerFadeIn=a.triggerFadeIn.bind(Object(d.a)(a)),a.scrollHandler=document.addEventListener("scroll",a.triggerFadeIn)):a.state.fadedIn=!0,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fadeIn&&this.triggerFadeIn()}},{key:"triggerFadeIn",value:function(){var e=this.props,t=e.fadeIn,a=e.fadeInOffset;if(t){var n=this.ref.current?this.ref.current.offsetTop:1/0,i=window.scrollY+window.innerHeight>=n+a;i&&(document.removeEventListener("scroll",this.scrollHandler),this.setState({fadedIn:i}))}}},{key:"render",value:function(){var e,t=this.props,a=t.className,n=t.children,r=t.fadeIn,o=t.style,s=this.state.fadedIn;return i.a.createElement("section",{ref:this.ref,className:g()("banner",(e={},Object(h.a)(e,a,a),Object(h.a)(e,"faded-out",!s),Object(h.a)(e,"faded-in",r&&s),e)),style:o},n)}}]),t}(i.a.Component);b.defaultProps={fadeIn:!0,fadeInOffset:100};var f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.url,n=e.icon;return i.a.createElement("a",{href:a,className:"social-button"},i.a.createElement("i",{className:n}),t)}}]),t}(i.a.Component),w=function(){return i.a.createElement(f,{name:"LinkedIn",icon:"fab fa-linkedin",url:"https://linkedin.com/in/benjaminpryke"})},y=function(){return i.a.createElement(f,{name:"Twitter",icon:"fab fa-twitter",url:"https://twitter.com/BenjaminPryke"})},v=function(){return i.a.createElement(f,{name:"GitHub",icon:"fab fa-github",url:"https://github.com/benpryke"})},j=function(){return i.a.createElement(f,{name:"Stack Overflow",icon:"fab fa-stack-overflow",url:"https://stackoverflow.com/users/604687/ninjakannon"})},E=function(){return i.a.createElement(f,{name:"Instagram",icon:"fab fa-instagram",url:"https://www.instagram.com/gym_ninja_ben"})},k=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(b,Object.assign({className:"footer"},this.props),i.a.createElement("h2",null,"Get in touch"),i.a.createElement("footer",null,i.a.createElement(w,null),i.a.createElement(y,null),i.a.createElement(v,null),i.a.createElement(j,null),i.a.createElement(E,null)))}}]),t}(n.Component),O=a(6),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={height:t.MAX_HEIGHT},a.computeHeight=a.computeHeight.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.scrollListener=document.addEventListener("scroll",this.computeHeight),this.resizeListener=window.addEventListener("resize",this.computeHeight)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.scrollListener),window.removeEventListener("resize",this.resizeListener)}},{key:"computeHeight",value:function(){var e=window.scrollY;window.innerWidth<900||window.innerHeight<700?this.setState({height:t.MAX_HEIGHT}):this.setState({height:e<t.SCROLL_CUTOFF?t.MAX_HEIGHT-e:t.MAX_HEIGHT-t.SCROLL_CUTOFF})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.headshot,n=Object(O.a)(e,["name","headshot"]),r=.8*this.state.height;return i.a.createElement(b,Object.assign({className:"hero"},n),i.a.createElement("div",{className:"hero-content",style:{maxHeight:this.state.height}},i.a.createElement("img",{src:a,alt:t,style:{width:r,height:r}}),i.a.createElement("div",{className:"conversation"},i.a.createElement("div",{className:"greeting speech-bubble"},i.a.createElement("h1",null,"Hi, I'm ",t)),i.a.createElement("div",{className:"action speech-bubble"},i.a.createElement(w,null),i.a.createElement(y,null)))))}}]),t}(i.a.Component);I.MAX_HEIGHT=500,I.MIN_HEIGHT=100,I.SCROLL_CUTOFF=I.MAX_HEIGHT-I.MIN_HEIGHT;var H=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=(e.logos,e.children),n=Object(O.a)(e,["title","logos","children"]);return i.a.createElement(b,Object.assign({className:"logos"},n),i.a.createElement("h2",null,t),i.a.createElement("div",{className:"logo-collection"},a))}}]),t}(i.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.src,n=e.url;return i.a.createElement("a",{className:"logo",href:n,key:t},i.a.createElement("img",{src:a,alt:t}))}}]),t}(i.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.body,n=e.imgSrc,r=Object(O.a)(e,["title","body","imgSrc"]);return i.a.createElement(b,Object.assign({className:"paragraph"},r),i.a.createElement("div",{className:"paragraph-header"},i.a.createElement("h2",null,t),!!n&&i.a.createElement("img",{src:n,alt:t})),a.match(/[^\r\n]+/g).map(function(e,t){return i.a.createElement("p",{key:t},e)}))}}]),t}(i.a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.children,n=Object(O.a)(e,["title","children"]);return i.a.createElement(b,Object.assign({className:"showcase"},n),i.a.createElement("h2",null,t),i.a.createElement("div",{className:"showpieces"},a))}}]),t}(i.a.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.thumbnail,n=e.description,r=e.url;return i.a.createElement("a",{href:r},i.a.createElement("div",{className:"showpiece"},i.a.createElement("img",{src:a,alt:t}),i.a.createElement("h3",null,t),i.a.createElement("p",null,n)))}}]),t}(i.a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(I,{name:"Benjamin Pryke",headshot:"images/headshot.jpg",fadeIn:!1}),i.a.createElement(C,{title:"Story",body:"I'm a highly driven full stack developer living and breathing the tech and FinTech startup worlds with a background in computer science and machine learning. I'm super excited by nascent and growth-phase companies, especially those using machine learning, as I'm motivated by being at the creative edge of new solutions.\nWorking in fast-paced startups has been perfect because I highly value diversity in my tasks and the freedom to make my own decisions and take ownership. I try to add value by understanding the bigger picture and actively engaging with projects at every level from roadmapping and architectural decisions, implementation minutiae and refactoring, to client demos and teaching. Right now, I mostly code with Python and React as these tools typically provide the most efficient and powerful routes to getting things done.\nI still remember how I felt at 11 years old when my dad brought home a gigantic, discarded Windows 98 PC from work, so it's no surprise that less than a year later I had started programming. My teenage creative energy expenditure on Flash games, websites and physics simulations ultimately culminated in a Master's degree in Computer Science from Bristol University. From there I dove straight into a PhD in machine and deep learning at the University of Edinburgh before leaving to co-found a profitable boutique investment fund utilising that PhD skillset to find inefficiencies in niche markets. Realising both the long time horizon it would take to build reputation enough to obtain significant funding and the limitations of not being surrounded by other developers, I moved happily to London to join the FinTech startup Beacon.\nOutside my primary work schedule, I make sure to push myself and learn in other ways such as writing data science articles, training gymnastics, and meeting others from the startup community to discuss the incredible things they're doing."}),i.a.createElement(S,{title:"Published Articles"},i.a.createElement(B,{title:"Advanced Jupyter Notebooks: A Tutorial",thumbnail:"images/articles/article-jupyter-advanced.jpg",description:"Popular with serious Jupyter users, this is an adventure through scripted execution, reporting pipelines, working with databases, and much more",url:"https://www.dataquest.io/blog/advanced-jupyter-notebooks-tutorial/"}),i.a.createElement(B,{title:"Jupyter Notebook for Beginners: A Tutorial",thumbnail:"images/articles/article-jupyter-beginners.jpg",description:"Exploring the basics of creating a Jupyter Notebook, the important terminology, and how easily notebooks can be shared and published online",url:"https://www.dataquest.io/blog/jupyter-notebook-tutorial/"}),i.a.createElement(B,{title:"Understanding SettingwithCopyWarning in pandas",thumbnail:"images/articles/article-settingwithcopywarning.png",description:"A deep dive into everything there is to know about the most common (and most misunderstood) warning in pandas",url:"https://www.dataquest.io/blog/settingwithcopywarning/"})),i.a.createElement(C,{title:"Financial Developer at Beacon",imgSrc:"images/logos/logo-beacon.jpg",body:"Beacon Platform is a multi-award-winning FinTech start-up with international offices headquartered in New York, and in September 2017 I joined the London office. I assumed a client-facing full stack dev role developing core IP and integrated web apps, engaging in consulting projects, and providing leadership to more junior colleagues.\nMy responsibilities keep me constantly engaged in the balance of simultaneous projects, client communications, enhancement and support requests, code reviews, demos, discussions, interviews, etc, and we primarily use Python, React/JavaScript, CSS/LESS, Git, with Jira for agile project management.\nEarly on, I took joint-ownership of Glint, an incredibly cool key full stack UI project with total visibility internally and externally. Contributing heavily to its growth, working closely with management, and teaching, supporting, managing, working with and learning from the junior members of the team we hired to take Glint further has acted as a reflection of full product development.\nMy role thankfully permits the freedom to work with and move between multiple internal/external teams, self-direct and prioritise, and engage management at all levels. I am also fortunate enough to be able to learn from the incredibly smart, driven group of individuals that make Beacon."}),i.a.createElement(S,{title:"Gymnastics around the world"},i.a.createElement(B,{title:"Berlin",thumbnail:"images/gym/gym-berlin.jpg",description:"A lot of my shots require many takes before I'm satisfied, but in this case one evening by the river at East Side Gallery I got a nice blur effect from snapping a still from a video of the action instead",url:"https://www.instagram.com/p/BVHQRdGha1B/"}),i.a.createElement(B,{title:"Skopje",thumbnail:"images/gym/gym-skopje.jpg",description:"Handstands are a favourite of mine, especially when a back flip is not possible. I took this in a park in Macedonia's capital, much to the interest of several onlooking kids",url:"https://www.instagram.com/p/BU5DbhNhkEN/"}),i.a.createElement(B,{title:"Budapest",thumbnail:"images/gym/gym-budapest.jpg",description:"I try to find the right place to do a back flip in every country I visit. When shooting in popular locations, like this one in front of the Hungarian Parliament Building, you have to wait for just the right moment every single take",url:"https://www.instagram.com/p/BU97_sIBoZX/"})),i.a.createElement(H,{title:"Professional Relationships"},i.a.createElement(N,{name:"Beacon Platform",src:"images/logos/logo-beacon.jpg",url:"https://beacon.io"}),i.a.createElement(N,{name:"Dataquest",src:"images/logos/logo-dataquest.png",url:"https://www.dataquest.io"}),i.a.createElement(N,{name:"Machina Capital",src:"images/logos/logo-machina-capital.png",url:"https://www.linkedin.com/company/machina-capital"}),i.a.createElement(N,{name:"BRACE Dementia Research",src:"images/logos/logo-brace.png",url:"https://www.alzheimers-brace.org"}),i.a.createElement(N,{name:"EPSRC",src:"images/logos/logo-epsrc.jpg",url:"https://epsrc.ukri.org/"}),i.a.createElement(N,{name:"The Podcast Host",src:"images/logos/logo-the-podcast-host.png",url:"https://www.thepodcasthost.com"}),i.a.createElement(N,{name:"Seymour Pools",src:"images/logos/logo-seymour-pools.jpg",url:"https://seymourpools.co.uk"}),i.a.createElement(N,{name:"Bristol University",src:"images/logos/logo-bristol.png",url:"http://www.bris.ac.uk/engineering/departments/computerscience/"}),i.a.createElement(N,{name:"Edinburgh University",src:"images/logos/logo-edinburgh.png",url:"http://www.anc.ed.ac.uk/machine-learning/"})),i.a.createElement(k,{fadeIn:!1}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);var T=document.getElementById("root");T.hasChildNodes()?o.a.hydrate(i.a.createElement(L,null),T):o.a.render(i.a.createElement(L,null),T),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.1718bc94.chunk.js.map