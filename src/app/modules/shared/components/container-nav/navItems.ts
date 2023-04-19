export const navItems = [
    {
        title: "Start",
        subNav: [
        
            { title: "Home", routerLink: "", icon: "assets/icons/icon-home.png" },
            { title: "Planning", routerLink: "/planning", icon: "assets/icons/icon-timeline-week.png" }
        ]
    },
    {
        title: "Planning",
        subNav: [
        
            //{ title: "Klanten", routerLink: "/customers", icon: "assets/icons/icon-customer.png" },
            { title: "Orders", routerLink: "/orders", icon: "assets/icons/icon-purchase-order.png" },
            { title: "Shifts", routerLink: "/shifts", icon: "assets/icons/icon-bulleted-list.png" }
    
        ]
    },
    {
        title: "Beheer",
        subNav: [
            { title: "MPG - Afdelingen", routerLink: "/departments", icon: "assets/icons/icon-department.png" },
            { title: "Medewerkers", routerLink: "/employees", icon: "assets/icons/icon-office-worker.png" },
            //{ title: "Accountbeheer", routerLink: "/planning", icon: "assets/icons/icon-management.png" },
    
        ]
    }
]