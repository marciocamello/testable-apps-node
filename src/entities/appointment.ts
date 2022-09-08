export interface AppointmentProps{
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

export class Appointment{
    private props : AppointmentProps;

    get customer(): string{
        return this.props.customer;
    }

    get startsAt(): Date{
        return this.props.startsAt;
    }

    get endsAt(): Date{
        return this.props.endsAt;
    }

    constructor(props: AppointmentProps){

        const {startsAt, endsAt} = props;

        if(startsAt <= new Date()){
            throw new Error('Start date cannot be after end date');
        }

        if( endsAt <= startsAt){
            throw new Error('End date cannot be before start date');
        }

        this.props = props;
    }
}