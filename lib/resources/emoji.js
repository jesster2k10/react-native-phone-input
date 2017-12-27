/**
 * Created by jesseonolememen on 27/12/2017.
 * Copyright (C) Jesse Onolememen 2017
 * All Rights Reserved
 */
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import nodeEmoji from 'node-emoji'
import PropTypes from 'prop-types'

function Emoji({ name, onPress, style }) {
    const emoji = nodeEmoji.get(name);
    return <TouchableOpacity onPress={onPress}>
            <Text style={[styles.text, style]}>{emoji}</Text>
        </TouchableOpacity>
}

const styles = {
    text: {
        fontSize: 24
    },
};

Emoji.propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: Text.PropTypes.style,
};

export default Emoji;