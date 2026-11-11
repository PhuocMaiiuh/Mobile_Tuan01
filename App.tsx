import {useState} from 'react';
import {Text, StyleSheet,View, Button} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
  type myType = {
    name: string
    age: number
    isAdmin: boolean
  }
//Bai1
  const UserCard = ({name, age, isAdmin}: myType): void=>{
    console.log(name);
    console.log(age);
    console.log(isAdmin);
  return (
   <>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{isAdmin}</Text>
   </>
  );
}
UserCard({name:"Mai", age: 21, isAdmin: true})
//Bai2
const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if(count > 0)
    setCount(count - 1);
  }
  return (
   <View>
   <Text>{count}</Text>
    <Button title="+" onPress={increase} />
    <Button title="-" onPress={decrease} />
   </View>
  );
};
//Bai3 
interface Todo {
  id: string
  title: string
}
const TodoList = () =>{
  const [todos, setTodos] = useState<Todo[]>(
    [
      {id:"1", title: "React-Native"},
      {id:"2", title: "KTLT"},
      {id:"3", title: "KT"}
    ]
  )
  return(
    <View>
    {todos.map((todo)=>(

        <Text key={todo.id}>{todo.title}</Text>
    ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const App = () => (
  <SafeAreaProvider>
      <SafeAreaView>
        <Counter/>
        <TodoList/>
      </SafeAreaView>
    </SafeAreaProvider>
)
export default App;