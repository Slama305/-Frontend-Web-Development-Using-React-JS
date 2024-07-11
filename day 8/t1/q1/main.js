document.getElementById('newwin').addEventListener('click', function() {
    var newwin = window.open('new.html', 'childWindow', 'width=400,height=300');
  
        
                setTimeout(function() {
                    newwin.close();
                }, 5000);
          

});