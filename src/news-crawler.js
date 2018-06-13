#!/usr/bin/env node
var usage = require('./usage');
const tn = require('./lib/scraping');
connection = require('./lib/connection');
storage_path = '../articles/'

rss =[
    {tn: {url:'https://tn.com.ar/rss.xml' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {ln: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-origen=2' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {cl: {url:'https://www.clarin.com/rss/lo-ultimo/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {ib: {url:'https://www.infobae.com/argentina-rss.xml' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article-header h1', dropline:'.subheadline', body: '#article-content .row'}, site:'IB'}}
]




function newsCrawler() {
    const res = usage.parseArguments();
    connection.init();
    Promise.all([tn.getRss(rss[0].tn),tn.getRss(rss[1].ln),tn.getRss(rss[2].cl),tn.getRss(rss[3].ib) ])
    .then((promises)=> console.log(res) || process.exit(0));

}

newsCrawler()
