import React, { useCallback, useRef } from 'react';
import { Share, StyleProp, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useSpring } from 'react-spring';
import { actions } from '../../../redux/actions/chuck.actions';
import { getJoke } from '../../../redux/selectors';
import { DraggableItem } from '../animated/DragableItem';
import { SpringAnimatedIcon } from '../animated/spring/SpringAnimatedIcon';
import { SpringAnimatedImage } from '../animated/spring/SpringAnimatedImage';
import OptionsModal from '../modals/Options';

export const BottomBar = React.memo(() => {
  const modalRef = useRef(null);
  const { value: jokeText } = useSelector(getJoke);
  const dispatch = useDispatch();
  const fetchJoke = useCallback(
    () => dispatch(actions.fetchAsyncApi.request()),
    [dispatch]
  );

  const fadeInProps: StyleProp<any> = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 750 }
  });

  const fadeTopProps: StyleProp<any> = useSpring({
    opacity: 1,
    bottom: 0,
    from: { bottom: -70, opacity: 0 },
    config: { duration: 750 }
  });

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <SpringAnimatedIcon
        callback={() => modalRef.current.openModal()}
        style={fadeInProps}
        name={'format-list-bulleted'}
      />
      <DraggableItem callback={fetchJoke}>
        <SpringAnimatedImage
          style={[fadeTopProps, { height: 303 / 3, width: 295 / 3 }]}
          source={{
            uri: `https://stickeroid.com/uploads/pic/full-pngimg/69311eaa3d0312a9e37dfbcb0a34d66bb3381e36.png`
          }}
        />
      </DraggableItem>
      <SpringAnimatedIcon
        callback={() =>
          Share.share({
            message: jokeText,
            title: 'FullChuck',
            url: 'https://github.com/x0s3/fullChuck'
          })
        }
        style={fadeInProps}
        name={'share'}
      />
      <OptionsModal ref={modalRef} />
    </View>
  );
});
