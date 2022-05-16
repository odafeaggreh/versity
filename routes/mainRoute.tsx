
import React from 'react';

// import View from "../pages/categories";
import View from "../pages/community"


export const mainRoute = [
    { path: '/categories', exact: true, main: () => <View /> },
    { path: '/community', exact: true, main: () => <View /> }
];
