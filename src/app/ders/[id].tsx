import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { TopicRow } from '@/components/TopicRow';
import { Bar, Button, Card, Header, Screen, T } from '@/components/ui';
import { COURSES, topicsByCourse } from '@/data/courses';
import { useApp } from '@/store/app';
import { COURSE_COLORS, colors } from '@/theme';

export default function CourseTopics() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { lessons } = useApp();
  const course = COURSES.find((c) => c.id === id);
  if (!course) {
    return <Screen><Header title="Ders bulunamadı" onBack={() => router.back()} /></Screen>;
  }
  const ts = topicsByCourse(course.id);
  const done = ts.filter((t) => lessons[t.id]?.done).length;
  const col = COURSE_COLORS[course.id];
  return (
    <Screen>
      <Header title={course.name} eyebrow="Ders" onBack={() => router.back()} />
      <Card style={{ gap: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <T v="body" color={colors.ink2}>Sınavda {course.examQuestions} soru</T>
          <T v="bodyStrong">{done} / {ts.length} konu</T>
        </View>
        <Bar value={ts.length ? done / ts.length : 0} color={col.fg} height={8} />
        <Button kind="soft" label="Bu dersten 20 soru çöz" onPress={() => router.push(`/sinav/ders-${course.id}`)} />
      </Card>
      <T v="h2">Konular</T>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        {ts.map((t, i) => <TopicRow key={t.id} topic={t} last={i === ts.length - 1} onPress={() => router.push(`/konu/${t.id}`)} />)}
      </Card>
    </Screen>
  );
}
