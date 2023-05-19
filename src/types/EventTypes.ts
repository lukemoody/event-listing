export interface IsEventCardDetail {
    id: string;
    eventname: string;
    listingid: string;
    description: string;
    date: string;
    largeimageurl: string;
    venue: {
        name: string;
        town: string;
    };
}

export interface IsEventCard {
    event: IsEventCardDetail;
}

export interface IsEventDetail {
    artists: {
        artistid: string;
        name: string;
        image: string;
    }[];
    eventname: string;
    description: string;
    MinAge: string;
    date: string;
    largeimageurl: string;
    venue: {
        name: string;
    };
    openingtimes: {
        doorsclose: string;
        doorsopen: string;
        lastentry: string;
    };
    isLoading: boolean;
}

export interface IsEventContext {
    event: IsEventDetail;
    setEvent: (event: IsEventDetail) => void;
}
