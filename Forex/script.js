// tradays-widget.js
(function() {
    // Create the widget container if it doesn't exist
    if (!document.getElementById('economicCalendarWidget')) {
        const container = document.createElement('div');
        container.style.cssText = 'width: 90%; margin: 20px auto 10px;';
        
        const widgetDiv = document.createElement('div');
        widgetDiv.id = 'economicCalendarWidget';
        container.appendChild(widgetDiv);
        
        document.body.appendChild(container);
    }
    
    // Create and load the Tradays script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-type', 'calendar-widget');
    script.src = 'https://www.tradays.com/c/js/widgets/calendar/widget.js?v=13';
    
    // Add the configuration as text content
    script.textContent = '{ "width": "100%", "height": "700", "mode": "2", "theme": 1 }';
    
    document.head.appendChild(script);
})();