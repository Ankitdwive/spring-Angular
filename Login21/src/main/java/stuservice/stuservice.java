package stuservice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import modelstu.stu;

public class stuservice {
	private static Map<Long,stu>students=new HashMap<Long, stu>();
	private static Long index=0l;
	
	
	public static List<stu>getAllStudents(){
		return new ArrayList<stu>(students.values());
		}
	
	public static stu getStudentDetail(Long StudentId){

		return students.get(StudentId);
		}
	
	public static stu addStudent(stu student){
		index +=1;
		student.setId(index);
		students.put(index,student);
		return student;
		}
	
	public static stu updatestudent(Long studentid, stu student){
		student.setId(studentid);
		students.put(studentid,student);
		return student;
		}
		public static stu deleteStudent(Long studentid){
		return students.remove(studentid);
		}}
