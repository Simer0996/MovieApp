import SelectList from 'react-native-dropdown-select-list'
import { useState } from 'react'

export const TVMenu = ({ setSelectedTvType, fetchTVShows }) => {

    const data = [{ key: 'on_the_air', value: 'on_the_air' }, { key: 'airing_today', value: 'airing_today' }, { key: 'popular', value: 'popular' }, { key: 'top_rated', value: 'top_rated' }];

    return (
        <SelectList setSelected={setSelectedTvType} data={data} onSelect={() => fetchTVShows()} />
    )

};