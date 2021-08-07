const state = {
    timestamp: (new Date()).getTime(),
    orderStatus: [
        "Intialize",
        "Booked",
        "Started",
        "Cancelled",
        "Aborted",
        "Completed",
        "Return Initiated"
    ],
    checkout: {
        name: "",
        address: "",
        mobile: "",
        email: ""
    },
    bookingDetails: {
        orders: []
    },
    vehicleSlot: {
        orders: []
    },
    trips: [],
    desinations: [
        { name: "source" },
        { name: "destination" },
    ],
    company_list: [],
    vehicleFilters: {
        passenger: {},
        "car-type": {},
        bags: {}
    },
    vehicleTypes: [],
    vehicle_list: [],
    searched_vehicle_list: {
        vehResult: []
    },
    crddtl: [],
    amountSlabs: [10, 30, 60, 100],
    searched_vehicle_obj: {
        FromId: 0,
        ToId: [],
        FromDate: new Date("1000-01-01"),
        ToDate: new Date("1000-01-01"),
        PickUpTime: new Date().toAM(),
        tripType: 'outstation',
        roundTrip: false,
        percent: 100
    },
    user: false,
    alert: {
        open: false,
        content: "",
        title: "",
    },
    vehicle_types: [
        {
            name: "Swift Dzire",
            path: "swift_dzire.png",
            type: "car",
        },
        {
            name: "Toyota Etios",
            path: "toyota_etios.png",
            type: "car",
        },
        {
            name: "Hyundai Creta",
            path: "hyundai_creta.jpeg",
            type: "car",
        },
        {
            name: "Innova",
            path: "innova.jpeg",
            type: "jeep",
        },
        {
            name: "Innova Crysta",
            path: "innova_crysta.png",
            type: "jeep",
        },
        {
            name: "Mahindra Scorpio",
            path: "scorpio.jpeg",
            type: "jeep",
        },
        {
            name: "Tempo Traveller",
            path: "tempo_traveller.jpeg",
            type: "tempo_traveller",
        },
        {
            name: "SML Mini Bus",
            path: "sml_minibus.png",
            type: "tempo_traveller",
        },
        {
            name: "Volvo Bus",
            path: "volvo_bus.png",
            type: "bus",
        },
        {
            name: "Tata Bus",
            path: "tata_bus.png",
            type: "bus",
        },
        {
            name: "SML Bus",
            path: "sml_bus.png",
            type: "bus",
        },
    ],
    vehicle_available_list: [
        {
            path: "/assets/vehicle_type/SHIFT_DZIRE.png",
            vehicleName: "Swift Dzire",
            amount: "200",
        },
        {
            path: "/assets/vehicle_type/SHIFT_DZIRE.png",
            vehicleName: "Toyota Etios",
            amount: "400",
        },
        {
            path: "/assets/vehicle_type/SHIFT_DZIRE.png",
            vehicleName: "Innova Crysta",
            amount: "500",
        },
        {
            path: "/assets/vehicle_type/SHIFT_DZIRE.png",
            vehicleName: "Swift Dzire",
            amount: "200",
        },
        {
            path: "/assets/vehicle_type/SHIFT_DZIRE.png",
            vehicleName: "Toyota Etios",
            amount: "400",
        },
        {
            path: "/assets/vehicle_type/SHIFT_DZIRE.png",
            vehicleName: "Innova Crysta",
            amount: "500",
        },
    ],
    latestServices: [
        {
            sl: 1,
            name: "city-transfer",
            title: "City Transfer",
            icon: "city-transport.png",
            description: "Safe and secured interstate transfer with luxury cars and busses in good conditions vehicles smooth and reliable transfer any location in India.",
        },
        {
            sl: 2,
            name: "airport-pickup-drop",
            title: "Airport Pickup-Drop",
            icon: "airport-transport.png",
            description:
                "We assist ontime pickup and drop services to the airport for your hasselfree journey.",
        },
        {
            sl: 3,
            name: "hospital-transfer",
            title: "Hospital Transfer",
            icon: "hospital-transport.png",
            description: `We can transfer safe
            pickup and drop at any 
            hospital in India. Care
            patient health emergency 
            transfer with ambulance service
            and cab service.`,
        },
        {
            sl: 4,
            title: "Whole City Tour",
            name: "whole-city-tour",
            icon: "hotel-transport.png",
            description: `Whole city tour we
             can provide luxury vehicles support
             team will guide tour plan for sightseeing locations.
             We can transfer outstation transfer cabs and 
             safe and secure hotel bookings`,
        },
        {
            sl: 5,
            name: "wedding-ceremony",
            title: "Wedding Ceremony",
            icon: "wedding-ceremony.png",
            description: `Book wedding special car for 
            all variant costly car. Transfer 
            your family and relatives in the  luxury
            bus facility safe and secure `,
        },
        {
            sl: 6,
            name: "luggage-transfer",
            title: "Luggage Transfer",
            icon: "luggege-transport.png",
            description: `Book wedding special car for 
            all variant costly car. Transfer 
            your family and relatives in the  luxury
            bus facility safe and secure `,
        }
    ],
    ...JSON.parse(localStorage.reduxStore || "{}")
};
export default state;
