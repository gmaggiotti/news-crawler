exports.feeds =[
    {brand: {url:'https://tn.com.ar/rss.xml',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/policiales',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/politica',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/deportes',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/internacional',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/sociedad',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/show',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},
    {brand: {url:'https://tn.com.ar/feed/musica',main:'https://www.tn.com.ar/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'.article__title', dropline:'.article__dropline', body: '.article__body p'}, site:'TN'}},


    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-origen=1', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-origen=2', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=30', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=272' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=131', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=7773', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=120', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=347', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=432', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=504', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},
    {brand: {url:'http://contenidos.lanacion.com.ar/herramientas/rss-categoria_id=371', main:'https://www.lanacion.com/' ,links:'result.feed.entry', element:'element.id[0]', scraping:{title:'.titulo', dropline:'.epigrafe', body: '#cuerpo p'}, site:'LN'}},


    {brand: {url:'https://www.clarin.com/rss/lo-ultimo/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', main:'https://www.clarin.com/', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/politica/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/mundo/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/sociedad/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/policiales/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/ciudades/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/opinion/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/economia/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/cultura/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},
    {brand: {url:'https://www.clarin.com/rss/tecnologia/', main:'https://www.clarin.com/' ,links:'result.rss.channel[0].item', element:'element.link[0]', scraping:{title:'#title', dropline:'.bajada', body: '.body-nota p'}, site:'CL'}},


]
