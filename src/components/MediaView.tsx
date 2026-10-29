import React from 'react';
import { VideoView, useVideoPlayer } from 'expo-video';
import { View } from 'react-native';
import { Scene } from './Scene';
import { Sign } from './Sign';
import { Diagram } from './Diagrams';
import type { Media } from '@/data/media';
import { colors } from '@/theme';

function VideoBlock({ uri }: { uri: string }) {
  const player = useVideoPlayer(uri, (p) => { p.loop = false; });
  return (
    <View style={{ borderRadius: 22, overflow: 'hidden', backgroundColor: '#000', aspectRatio: 16 / 9 }}>
      <VideoView player={player} style={{ flex: 1 }} nativeControls contentFit="contain" />
    </View>
  );
}

/** Soru görseli: levha, kavşak krokisi veya video (video için bkz. docs/ICERIK.md). */
export function MediaView({ media }: { media?: Media }) {
  if (!media) return null;
  if (media.kind === 'sign') {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 14, backgroundColor: '#fff', borderRadius: 22, borderWidth: 1, borderColor: colors.border }}>
        <Sign id={media.id} size={150} />
      </View>
    );
  }
  if (media.kind === 'diagram') {
    return (
      <View style={{ alignItems: 'center', paddingVertical: 14, backgroundColor: '#fff', borderRadius: 22, borderWidth: 1, borderColor: colors.border }}>
        <Diagram id={media.id} size={170} />
      </View>
    );
  }
  if (media.kind === 'scene') {
    return (
      <View style={{ alignItems: 'center' }}>
        <Scene spec={media.scene} size={300} />
      </View>
    );
  }
  return <VideoBlock uri={media.uri} />;
}
