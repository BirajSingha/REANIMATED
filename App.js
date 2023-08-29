import React from 'react';
import StackNav from './src/navigators/StackNav';
import Home from './src/screeens/Home';
import {View} from 'react-native';
import Others from './src/screeens/Others';

const data = [
  {
    id: 1,
    title: 'First Circuit',
    workout_day_id: 1,
    description: 'Perform 3 circuit sets',
    status: 1,
    created_at: '2023-05-18T06:28:51.000000Z',
    updated_at: '2023-05-18T09:09:33.000000Z',
    circuit_exercise: [
      {
        id: 4,
        exersice_id: 16,
        circuit_id: 1,
        sets: '5',
        reps: '8',
        rest_time: '20',
        description: 'hellohello9',
        status: 1,
        created_at: '2023-05-18T06:29:50.000000Z',
        updated_at: '2023-05-18T09:37:52.000000Z',
        deleted_at: null,
        exercise: {
          id: 16,
          exercise_category_id: 1,
          name: 'B-stance RDL',
          status: 1,
          description: 'lorem ipsum',
          created_at: '2023-05-18T09:37:04.000000Z',
          updated_at: '2023-06-27T10:11:53.000000Z',
          video: 'exercise_video/168786071293.mp4',
          thumbnail: 'exercise/thumbnail168786071230.png',
          activity_met: '',
          duration: 'null',
          deleted_at: null,
          exercise_video:
            'https://admin.intake.fit/storage/exercise_video/168786071293.mp4',
          exercise_thumbnail:
            'https://admin.intake.fit/storage/exercise/thumbnail168786071230.png',
          category: {
            id: 1,
            name: 'Cardio',
            status: 1,
            created_at: '2022-12-09T03:41:28.000000Z',
            updated_at: '2022-12-09T03:41:28.000000Z',
          },
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Second Circuit',
    workout_day_id: 1,
    description: 'Perform 3 circuit sets',
    status: 1,
    created_at: '2023-05-18T06:47:09.000000Z',
    updated_at: '2023-05-18T09:10:11.000000Z',
    circuit_exercise: [
      {
        id: 3,
        exersice_id: 1,
        circuit_id: 2,
        sets: '10',
        reps: '12',
        rest_time: '40',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        status: 1,
        created_at: '2023-05-18T06:29:50.000000Z',
        updated_at: '2023-05-18T09:38:16.000000Z',
        deleted_at: null,
        exercise: {
          id: 1,
          exercise_category_id: 1,
          name: 'Aerobic high',
          status: 1,
          description:
            'Moderate aerobic exercise includes activities such as brisk walking, biking, swimming and mowing the lawn',
          created_at: '2023-01-31T20:53:24.000000Z',
          updated_at: '2023-02-15T02:42:28.000000Z',
          video: 'exercise_video/167646854887.mp4',
          thumbnail: 'exercise/thumbnail168786071230.png',
          activity_met: '',
          duration: 'null',
          deleted_at: null,
          exercise_video:
            'https://admin.intake.fit/storage/exercise_video/167646854887.mp4',
          exercise_thumbnail:
            'https://admin.intake.fit/storage/exercise/thumbnail168786071230.png',
          category: {
            id: 1,
            name: 'Cardio',
            status: 1,
            created_at: '2022-12-09T03:41:28.000000Z',
            updated_at: '2022-12-09T03:41:28.000000Z',
          },
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Third Circuit',
    workout_day_id: 1,
    description: 'Perform 3 circuit sets',
    status: 1,
    created_at: '2023-05-18T09:10:35.000000Z',
    updated_at: '2023-05-18T09:10:35.000000Z',
    circuit_exercise: [
      {
        id: 2,
        exersice_id: 1,
        circuit_id: 3,
        sets: '4',
        reps: '6',
        rest_time: '20',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fi",
        status: 1,
        created_at: '2023-05-18T06:29:50.000000Z',
        updated_at: '2023-05-18T09:38:32.000000Z',
        deleted_at: null,
        exercise: {
          id: 1,
          exercise_category_id: 1,
          name: 'Aerobic high',
          status: 1,
          description:
            'Moderate aerobic exercise includes activities such as brisk walking, biking, swimming and mowing the lawn',
          created_at: '2023-01-31T20:53:24.000000Z',
          updated_at: '2023-02-15T02:42:28.000000Z',
          video: 'exercise_video/167646854887.mp4',
          thumbnail: 'exercise/thumbnail168786071230.png',
          activity_met: '',
          duration: 'null',
          deleted_at: null,
          exercise_video:
            'https://admin.intake.fit/storage/exercise_video/167646854887.mp4',
          exercise_thumbnail:
            'https://admin.intake.fit/storage/exercise/thumbnail168786071230.png',
          category: {
            id: 1,
            name: 'Cardio',
            status: 1,
            created_at: '2022-12-09T03:41:28.000000Z',
            updated_at: '2022-12-09T03:41:28.000000Z',
          },
        },
      },
      {
        id: 6,
        exersice_id: 16,
        circuit_id: 3,
        sets: '12',
        reps: '15',
        rest_time: '90',
        description: 'demo',
        status: 1,
        created_at: '2023-05-19T07:24:44.000000Z',
        updated_at: '2023-05-19T07:24:44.000000Z',
        deleted_at: null,
        exercise: {
          id: 16,
          exercise_category_id: 1,
          name: 'B-stance RDL',
          status: 1,
          description: 'lorem ipsum',
          created_at: '2023-05-18T09:37:04.000000Z',
          updated_at: '2023-06-27T10:11:53.000000Z',
          video: 'exercise_video/168786071293.mp4',
          thumbnail: 'exercise/thumbnail168786071230.png',
          activity_met: '',
          duration: 'null',
          deleted_at: null,
          exercise_video:
            'https://admin.intake.fit/storage/exercise_video/168786071293.mp4',
          exercise_thumbnail:
            'https://admin.intake.fit/storage/exercise/thumbnail168786071230.png',
          category: {
            id: 1,
            name: 'Cardio',
            status: 1,
            created_at: '2022-12-09T03:41:28.000000Z',
            updated_at: '2022-12-09T03:41:28.000000Z',
          },
        },
      },
    ],
  },
];

const App = () => {
  return <StackNav />;
  // (
  // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

  /* <Home data={data} /> */

  // </View>
  // );
};

export default App;
