const data = {
    "data": {
        "id": "e4p9dXrpmoFRwOsMk3dlCA",
        "type": "bookings",
        "attributes": {

            "departure_time": "2019-07-29T22:55",

            "arrival_time": "2019-07-30T02:02",
            "duration": 11220,

            "title": "mr",

            "first_name": "Alexander", 

            "last_name": "Nevski",

            "email": "alexander.nevski@tutu.com",
            "phone": "4915237601929",
            "city": "Nevskiwogorod",
            "zip_code": "10123",
            "street_and_number": "Berlinstr. 23",
            "execute_payment": false,
            "payment_method": "demand_note",
            "payment_token": null,
            "payer_id": null,
            "total_price": 2000,
            "pax": 1,
            "flight_number": null,

            "distribusion_booking_number": "ML7BWZ",

            "marketing_carrier_booking_number": "LIVNYX",
            
            "terms_accepted": true,
            "send_customer_email": true,
            "send_marketing_emails": null,
            "retailer_partner_number": "123459",
            "connection_reference": null,
            "created_at": "2019-07-18T11:37"
        },
        "relationships": {
            "departure_station": {
                "data": {
                    "id": "ITROMFAI",
                    "type": "stations"
                }
            },
            "arrival_station": {
                "data": {
                    "id": "ITRROMET",
                    "type": "stations"
                }
            },
            "marketing_carrier": {
                "data": {
                    "id": "FEFR",
                    "type": "marketing_carriers"
                }
            },
            "cancellation": {
                "data": null
            },
            "fare_class": {
                "data": {
                    "id": "FARE-1",
                    "type": "fare_classes"
                }
            },
            "segments": {
                "data": [
                    {
                        "id": "FEFR-ITROMFAI-ITRROMET-2019-07-29T22:55-2019-07-30T02:02-0",
                        "type": "segments"
                    }
                ]
            },
            "passengers": {
                "data": [
                    {
                        "id": "PNOS-KHERZAKOV-ALEXANDER-1",
                        "type": "passengers"
                    }
                ]
            },
            "extras": {
                "data": []
            }
        }
    },
    "jsonapi": {
        "version": "1.0"
    },
    "meta": {
        "locale": "en",
        "currency": "EUR"
    },
    "included": [
        {
            "id": "ITROMFAI",
            "type": "stations",
            "attributes": {
                "station_type": "bus_station",
                "code": "ITROMFAI",
                "name": "Rome Fiumicino Airport Terminal 3",
                "description": "The bus stops in front of Arrivals Terminal 3.",
                "street_and_number": "Via Francesco Baracca",
                "zip_code": "00054",
                "longitude": 12.25108,
                "latitude": 41.79455,
                "time_zone": "Europe/Rome"
            },
            "relationships": {
                "city": {
                    "data": {
                        "id": "ITROM",
                        "type": "cities"
                    }
                },
                "area": {
                    "data": {
                        "id": "ITROMRF",
                        "type": "areas"
                    }
                }
            }
        },
        {
            "id": "ITROM",
            "type": "cities",
            "attributes": {
                "code": "ITROM",
                "name": "Rome"
            }
        },
        {
            "id": "ITRROMET",
            "type": "stations",
            "attributes": {
                "station_type": "bus_station",
                "code": "ITRROMET",
                "name": "Naples Metropark",
                "description": "Stop is at the central railway station, at Terminal Bus  Metropark.",
                "street_and_number": "Corso Arnaldo Lucci 152",
                "zip_code": "80142",
                "longitude": 14.27283,
                "latitude": 40.85114,
                "time_zone": "Europe/Rome"
            },
            "relationships": {
                "city": {
                    "data": {
                        "id": "ITRRO",
                        "type": "cities"
                    }
                },
                "area": {
                    "data": null
                }
            }
        },
        {
            "id": "ITRRO",
            "type": "cities",
            "attributes": {
                "code": "ITRRO",
                "name": "Naples"
            }
        },
        {
            "id": "FEFR",
            "type": "marketing_carriers",
            "attributes": {
                "code": "FEFR",
                "trade_name": "Fiumicino Express",
                "legal_name": "Autoservizi Meridionali Srl",
                "address": "Via della Magliana 1066 00166 Roma, Italy",
                "phone": "+39 391 399 80 81",
                "fax": "",
                "customer_service_phone": "+39 391 399 80 81",
                "email": "info@fiumicinoexpress.com",
                "commercial_register": "",
                "commercial_register_number": "CCIA 260084",
                "vat_no": "IT00409910635",
                "authorised_representative": "Giancarlo Pannella",
                "white_label_logo": "http://www.fiumicinoexpress.com/wp-content/uploads/2016/09/LOGO.jpg",
                "white_label_colour_code": "#0431B4",
                "terms": "Terms and conditions text.",
                "flight_number_required": false,
                "cancellation_type": "fee_per_ticket",
                "booking_fee": 0,
                "cancellation_fee": 1500,
                "cancellation_cutoff": 172800
            }
        },
        {
            "id": "FEFR-ITROMFAI-ITRROMET-2019-07-29T22:55-2019-07-30T02:02-0",
            "type": "segments",
            "attributes": {
                "departure_time": "2019-07-29T22:55",
                "arrival_time": "2019-07-30T02:02",
                "index": 0
            },
            "relationships": {
                "departure_station": {
                    "data": {
                        "id": "ITROMFAI",
                        "type": "stations"
                    }
                },
                "arrival_station": {
                    "data": {
                        "id": "ITRROMET",
                        "type": "stations"
                    }
                },
                "operating_carrier": {
                    "data": {
                        "id": "FEFR",
                        "type": "operating_carriers"
                    }
                },
                "vehicle": {
                    "data": {
                        "id": "BUS-FEFR-ITROMFAI-ITRROMET-2019-07-29T22:55-2019-07-30T02:02-0",
                        "type": "vehicles"
                    }
                },
                "segment_passengers": {
                    "data": [
                        {
                            "id": "PNOS-KHERZAKOV-ALEXANDER-1-0",
                            "type": "segment_passengers"
                        }
                    ]
                }
            }
        },
        {
            "id": "FEFR",
            "type": "operating_carriers",
            "attributes": {
                "code": "FEFR",
                "trade_name": "Fiumicino Express",
                "legal_name": "Autoservizi Meridionali Srl"
            }
        },
        {
            "id": "PNOS-KHERZAKOV-ALEXANDER-1-0",
            "type": "segment_passengers",
            "attributes": {
                "seat_number": null
            },
            "relationships": {
                "passenger": {
                    "data": {
                        "id": "PNOS-KHERZAKOV-ALEXANDER-1",
                        "type": "passengers"
                    }
                }
            }
        },
        {
            "id": "BUS-FEFR-ITROMFAI-ITRROMET-2019-07-29T22:55-2019-07-30T02:02-0",
            "type": "vehicles",
            "relationships": {
                "vehicle_type": {
                    "data": {
                        "id": "BUS",
                        "type": "vehicle_types"
                    }
                }
            }
        },
        {
            "id": "BUS",
            "type": "vehicle_types",
            "attributes": {
                "code": "BUS",
                "name": "Bus",
                "description": "Long vehicle which is usually transporting a group of people (ca. 45) on streets."
            }
        },
        {
            "id": "PNOS-KHERZAKOV-ALEXANDER-1",
            "type": "passengers",
            "attributes": {
                "first_name": "Alexander",
                "last_name": "Kherzakov",
                "serial_code": "eyJib2FyZGluZ190eXBlIjoicGFzc2VuZ2VyIiwiYm9hcmRpbmdfbnVtYmVyIjoiMUlBM0lDSUtVTCJ9",
                "type": "PNOS"
            }
        },
        {
            "id": "FARE-1",
            "type": "fare_classes",
            "attributes": {
                "code": "FARE-1",
                "name": "Standard",
                "iata_category": null,
                "journey_type": "single"
            },
            "relationships": {
                "fare_features": {
                    "data": [
                        {
                            "id": "WIFI",
                            "type": "fare_features"
                        },
                        {
                            "id": "TOIL",
                            "type": "fare_features"
                        },
                        {
                            "id": "PSOC",
                            "type": "fare_features"
                        },
                        {
                            "id": "ACON",
                            "type": "fare_features"
                        },
                        {
                            "id": "BLUG",
                            "type": "fare_features"
                        },
                        {
                            "id": "ALRO",
                            "type": "fare_features"
                        },
                        {
                            "id": "REFU",
                            "type": "fare_features"
                        }
                    ]
                }
            }
        },
        {
            "id": "WIFI",
            "type": "fare_features",
            "attributes": {
                "code": "WIFI",
                "name": "Wifi",
                "description": "Free wifi is available on board."
            }
        },
        {
            "id": "TOIL",
            "type": "fare_features",
            "attributes": {
                "code": "TOIL",
                "name": "Toilet",
                "description": "A toilet is available on board."
            }
        },
        {
            "id": "PSOC",
            "type": "fare_features",
            "attributes": {
                "code": "PSOC",
                "name": "Power Socket",
                "description": "Power supply is available in the bus."
            }
        },
        {
            "id": "ACON",
            "type": "fare_features",
            "attributes": {
                "code": "ACON",
                "name": "Air Conditioning",
                "description": "The bus has a cooling ventilation."
            }
        },
        {
            "id": "BLUG",
            "type": "fare_features",
            "attributes": {
                "code": "BLUG",
                "name": "Bulky Luggage",
                "description": "Passenger can bring 2 items of hold baggage up to 30kg each, plus one item of hand baggage."
            }
        },
        {
            "id": "ALRO",
            "type": "fare_features",
            "attributes": {
                "code": "ALRO",
                "name": "Additional Leg Room",
                "description": "The seat has additional leg space."
            }
        },
        {
            "id": "REFU",
            "type": "fare_features",
            "attributes": {
                "code": "REFU",
                "name": "Refundable",
                "description": "The ticket can be cancelled and refunded according to the terms and conditions of the carrier."
            }
        }
    ]
}

export default data;
