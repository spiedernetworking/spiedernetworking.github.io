function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  document.addEventListener("DOMContentLoaded", function() {
    
    var sidenav = document.getElementById('mySidenav');

    var links = [
        { href: "home.html", icon: "fa-house", text: "Home"},
        { href: "about.html", icon: "fa-info-circle", text: "About" },
        { href: "updates.html", icon: "fa-rotate-right", text: "Updates"},
        { href: "projects.html", icon: "fa-toolbox", text: "Projects" },
        { href: "contacts.html", icon: "fa-address-card", text: "Contacts" },
        { href: "resources.html", icon: "fa-parachute-box", text: "Resources" },
        
    ];

    links.forEach(function(link) {
        var aTag = document.createElement('a');
        
        aTag.href = link.href;

        var icon = document.createElement('i');
        icon.classList.add('fa-solid', link.icon);

        aTag.appendChild(icon);

        aTag.appendChild(document.createTextNode(" " + link.text));

        sidenav.appendChild(aTag);
    });
});
