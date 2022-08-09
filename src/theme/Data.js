import React from 'react'
import { poster_1, poster_2, poster_3, User } from '../assets'

const headerdata = [
    { title: 'Trending' },
    { title: 'Posts' },
    { title: 'Stats' },
    { title: 'Outlook' },
]

const TrendingData = [
    {
        title: 'Race Time In Chicago',
        image: poster_1,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Tulane Victorious At Home',
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean dui porttitor sit molestie. Vel felis, porttitor semper senectus vulputate nunc pulvinar et. Id sed sed at in magna. Tempus consectetur leo duis orci elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean',
    },
    {
        title: 'Ride With Rambler 88',
        image: poster_2,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Nothing Will be Easy ',
        image: poster_3,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
]


const postsData = [
    {
        title: 'NZL Sailing Team',
        image: poster_1,
        description: 'Tom Saunders is a keen golfer and knows he needs tomorrow to be "moving day"',
    },
    {
        title: 'Ride With Rambler 88',
        image: poster_2,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Tulane Victorious At Home',
        description: 'Tulane delivers on its home waters to win College Sailing"s Dinghy National Championship.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean dui porttitor sit molestie. Vel felis, porttitor semper senectus vulputate nunc pulvinar et. Id sed sed at in magna. Tempus consectetur leo duis orci elit.',

    },
    {
        title: 'Nothing Will be Easy ',
        image: poster_3,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
]



const statsData = [
    {
        title: 'Sail modules masses (before & after)',
        image: poster_1,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Sail Stock Price & Chart',
        image: poster_2,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Ride With Rambler 88',
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean dui porttitor sit molestie. Vel felis, porttitor semper senectus vulputate nunc pulvinar et. Id sed sed at in magna. Tempus consectetur leo duis orci elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean',
    },
    {
        title: 'Nothing Will be Easy ',
        image: poster_3,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
]



const outlooksData = [
    {
        title: 'Family crews take podium.',
        image: poster_1,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Tulane Victorious At Home',
        image: poster_2,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
    {
        title: 'Ride With Rambler 88',
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean dui porttitor sit molestie. Vel felis, porttitor semper senectus vulputate nunc pulvinar et. Id sed sed at in magna. Tempus consectetur leo duis orci elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque arcu lectus at felis morbi. Phasellus tincidunt aenean',
    },
    {
        title: 'Nothing Will be Easy ',
        image: poster_3,
        description: 'The Helly Hansen Sailing World Regatta Series kicks off the racing season in Chicago.',
    },
]

const NotificationData = [
    {
        Name: 'Race Time In Chicago',
        min: 'Posted 15 min ago',
        date: 'Thu 02 June, 2022',
        image: User
    },
    {
        Name: 'Ride with Rambler 88',
        min: 'Posted 2 days ago',
        date: 'Tue  31 May, 2022    ',
        image: User
    },
    {
        Name: 'Nothing will be easy',
        min: 'Posted 15 days ago',
        date: 'Mon 16 May, 2022',
        image: User
    },
    {
        Name: 'Tulane Victorius at home',
        min: 'Posted 1 month ago',
        date: 'Fri  01 May , 2022',
        image: User
    },
    {
        Name: 'Race Time In Chicago',
        min: 'Posted 1 year ago',
        date: 'Thu 02 June, 2021',
        image: User
    },
]

export {
    headerdata,
    TrendingData,
    postsData,
    statsData,
    outlooksData,
    NotificationData,
}