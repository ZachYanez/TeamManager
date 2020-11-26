
INSERT INTO bands (band_name, number_of_members)
    VALUES 
        ("Capyac", 6), 
        ("The Watters", 7),
        ("Dale Watson", 4),
        ("Interrobang", 8);


INSERT INTO role (instrument_name, salary, band)
    VALUES 
        ("Lead Singer", 300000,"Dale Watson"),
        ("Saxaphone", 50000, "Capyac"),
        ("Percussion", 75000, "Capyac"),
        ("Synth", 1000000, "Capyac"),
        ("Backup Singer", 50000, "Capyac"),
        ("Bass", 80000, "Dale Watson"), 
        ("Lead Singer", 100000,"Capyac")
        ("Slide Guitar", 60000, "Dale Watson"),
        ("Lead Guitar", 100000,"The Watters"),
        ("Lead Singer", 150000, "The Watters"),
        ("Bass", 60000, "The Watters");


INSERT INTO member (first_name, last_name, instrument, band)
    VALUES
        ("Dale","Watson","Lead Singer","Dale Watson"),
        ("Marshall","Lowry","Saxaphone","Capyac"),
        ("Zach","Yanez","Percussion","Capyac"),
        ("Delwin","Campbell","Synth","Capyac"),
        ("Collin","Finnigan","Backup Singer","Capyac"),
        ("Chris","Bassguy","Bass","Dale Watson"),
        ("Eric","Peana","Lead Singer","Capyac"),
        ("Al","Smokelung","Slide Guitar","Dale Watson"),
        ("Daniel","Watters","Lead Guitar","The Watters"),
        ("Jenna","Watters","Lead Singer","The Watters"),
        ("Joe","Bassman","Bass","The Watters");
