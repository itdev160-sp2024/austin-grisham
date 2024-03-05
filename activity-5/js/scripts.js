(function() 
{
    var data = [
        {
            name: 'open in browser',
            description: 'This allows you to open the current file in your default browser or application.',
            author: 'TechER',
            url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
            downloads: 9523659,
            stars: 86,
            price: 0.0,
            selector: 'p1'
        },
        {
            name: 'indent-rainbow',
            description: 'Makes indentation easier to read.',
            author: 'oderwat',
            url: 'https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow',
            downloads: 7088049,
            stars: 126,
            price: 0.0,
            selector: 'p2'
        }
    ];
    function Package(data) 
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data. selector;
        this.getFormattedDownloads = function () 
        {
            return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function () 
        {
            return this.stars.toLocaleString();
        };
    }
    var getTodaysDate = function () 
    {
        var today = new Date();
        return today.toDateString();
    };
    var getEl = function (id) {
        return document.getElementById(id);
    };
    var writePackageInfo = function(package) 
    {
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    }
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();
    var openInBrowser = new Package(data[0]);
    writePackageInfo(openInBrowser);
    var indentRainbow = new Package(data[1]);
    writePackageInfo(indentRainbow);
}());