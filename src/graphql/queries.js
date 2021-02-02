import gql from 'graphql-tag'

export const MEETUPS_QUERY = gql`
    query MeetupsQuery {
        meetups {
            id
            title
            date
            location
            organizer {
                name
            }
            attendees {
                id
            }
        }
    }