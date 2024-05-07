// import React, { useState, useEffect } from 'react';
// import './modal.css';

// const Arbitrum = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [userAnswers, setUserAnswers] = useState({});

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 20000); // 20 seconds in milliseconds

//     return () => clearTimeout(timer);
//   }, []); // Run only once on component mount

//   const QuizData = [
//     {
//       question: "Which language runs in a web browser?",
//       options: ["Java", "C", "Python", "JavaScript"],
//       answer: 3
//     },
//     {
//       question: "What does CSS stand for?",
//       options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
//       answer: 2
//     },
//     {
//       question: "What does HTML stand for?",
//       options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
//       answer: 1
//     },
//     {
//       question: "What year was JavaScript launched?",
//       options: ["1996", "1995", "1994", "none of the above"],
//       answer: 2
//     },
//   ];

//   const handleAnswerChange = (questionIndex, selectedOptionIndex) => {
//     setUserAnswers({
//       ...userAnswers,
//       [questionIndex]: selectedOptionIndex
//     });
//   };

//   const handleSubmit = () => {
//     // Logic to evaluate user's answers
//     // alert("User's answers:", userAnswers)
//     console.log("User's answers:", userAnswers);
//   };

//   return (
//     <div>
//       <a href="https://arbitrum.io/" target="_blank" rel="noopener noreferrer" cursor="pointer">
//         <button>Learn more about Arbitrum</button>
//       </a>

//       <h2>What is Arbitrum</h2>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//       </p>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Quiz</h2>
//             {QuizData.map((questionData, questionIndex) => (
//               <div key={questionIndex}>
//                 <p>{questionData.question}</p>
//                 <ul>
//                   {questionData.options.map((option, optionIndex) => (
//                     <li key={optionIndex}>
//                       <label>
//                         <input
//                           type="radio"
//                           name={`question_${questionIndex}`}
//                           value={optionIndex}
//                           onChange={() => handleAnswerChange(questionIndex, optionIndex)}
//                         />
//                         {option}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//             <button onClick={handleSubmit}>Submit</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Arbitrum;

import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const Arbitrum = () => {
  const [showModal, setShowModal] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 20000); // 20 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []); // Run only once on component mount

  const QuizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: 3
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
      answer: 2
    },
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Machine Language", "Helicopters Terminals Motorboats Lamborginis"],
      answer: 1
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "none of the above"],
      answer: 2
    },
  ];

  const handleAnswerChange = (questionIndex, selectedOptionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOptionIndex
    });
  };

  const handleSubmit = () => {
    // Logic to evaluate user's answers
    console.log("User's answers:", userAnswers);
  };

  return (
    <div>
      <a href="https://arbitrum.io/" target="_blank" rel="noopener noreferrer" cursor="pointer">
        <Button>Learn more about Arbitrum</Button>
      </a>

      <h2>What is Arbitrum</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent borderRadius="xl" boxShadow="lg" backgroundColor="red" height="80vh" width="100vw"  >
          <ModalHeader fontSize="xl">Quiz</ModalHeader>
          <ModalBody gap="50rem" color="blue.500">
            {QuizData.map((questionData, questionIndex) => (
              <div key={questionIndex}>
                <p>{questionData.question}</p>
                <ul>
                  {questionData.options.map((option, optionIndex) => (
                    <li key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question_${questionIndex}`}
                          value={optionIndex}
                          onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Arbitrum;
