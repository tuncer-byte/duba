import React from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { T } from '@/components/ui';
import { courseById } from '@/data/courses';
import type { Topic } from '@/data/types';
import { useApp } from '@/store/app';
import { colors, fonts } from '@/theme';

export function TopicRow({ topic, onPress, last, showCourse }: { topic: Topic; onPress: () => void; last: boolean; showCourse?: boolean }) {
  const { lessons } = useApp();
  const p = lessons[topic.id];
  const done = !!p?.done;
  const started = !!p && !p.done;
  const soon = !topic.hasLesson;
  return (
    <Pressable
      accessibilityRole="button" accessibilityState={{ disabled: soon }} onPress={soon ? undefined : onPress}
      style={{ flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 18, paddingVertical: 16, backgroundColor: started ? colors.primarySoft : '#fff', borderBottomWidth: last ? 0 : 1, borderBottomColor: colors.border, opacity: soon ? 0.6 : 1 }}
    >
      {done ? (
        <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: colors.green, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" size={18} color="#fff" stroke={3} />
        </View>
      ) : soon ? (
        <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: colors.track, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="lock" size={16} color={colors.mute} />
        </View>
      ) : (
        <View style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 3, borderColor: started ? colors.primary : '#C9D3D1' }} />
      )}
      <View style={{ flex: 1 }}>
        <T v="bodyStrong" color={started ? colors.primary : colors.ink} style={{ fontFamily: fonts.bodySemi }}>{topic.title}</T>
        {showCourse && <T v="caption" color={colors.mute}>{courseById(topic.courseId).name}</T>}
      </View>
      <T v="small" color={started ? colors.primary : colors.mute} style={{ fontFamily: started ? fonts.bodyBold : fonts.body }}>
        {soon ? 'Yakında' : started ? 'Devam et' : `${topic.minutes} dk`}
      </T>
    </Pressable>
  );
}
