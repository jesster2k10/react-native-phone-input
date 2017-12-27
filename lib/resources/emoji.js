/**
 * Created by jesseonolememen on 27/12/2017.
 * Copyright (C) Jesse Onolememen 2017
 * All Rights Reserved
 */
import React from 'react'
import { Text } from 'react-native'
import nodeEmoji from 'node-emoji'
import PropTypes from 'prop-types'

function Emoji({ name }) {
    const emoji = nodeEmoji.get(name);
    return <Text>{emoji}</Text>
}

Emoji.propTypes = {
    name: PropTypes.string.isRequired
};

export default Emoji;