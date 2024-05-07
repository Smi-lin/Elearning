import React, { useState, useEffect } from "react";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import ArbitrumLogo from "../../../assets/arbitrum-logo.jpeg";
import arbitrum from "../../../assets/Arbitrum.png";
import "./modal.css";

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
      answer: 3,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      answer: 2,
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamborginis",
      ],
      answer: 1,
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "none of the above"],
      answer: 2,
    },
  ];

  const handleAnswerChange = (questionIndex, selectedOptionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: selectedOptionIndex,
    });
  };

  const handleSubmit = () => {
    console.log("User's answers:", userAnswers);
  };

  return (
    <Box
      as="header"
      h="100vh"
      minH="100%"
      d="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
      backgroundImage={`linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${ArbitrumLogo})`}
      backgroundSize="cover"
      backgroundPosition="center"
      textAlign="center"
    >
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        marginTop="5rem"
      >
        <img
          className="image"
          height="40%"
          width="30%"
          src={arbitrum}
          alt="Arbitrum Logo"
        />

        <Flex
          flexDirection="column"
          alignItems={{ base: "flex-start", md: "flex-end" }}
        >
          <Heading
            as="h2"
            fontSize="2.7rem"
            marginTop="5rem"
            marginBottom="3rem"
            marginRight="20rem"
          >
            What is Arbitrum
          </Heading>

          <Text fontSize="1.2rem" marginRight="2rem" lineHeight="50px">
            This document is a deep-dive explanation of Arbitrum Nitro's design
            and the rationale for it. <br />
            This isn't API documentation, nor is it a guided tour of the
            code--look elsewhere for those. <br />
            “Inside Arbitrum Nitro” is for people who want to understand Nitro's
            design. The body of this document will describe Arbitrum Rollup,{" "}
            <br />
            the primary use case of the Nitro technology and the one used on the
            Arbitrum One chain. There is a variant use case, called AnyTrust,{" "}
            <br />
            which is used by the Arbitrum Nova chain. AnyTrust is covered by a
            section at the end of this document.
          </Text>
          <Button
            className="btn"
            padding="1.5rem"
            colorScheme="blue"
            marginTop="5rem"
            marginRight="25rem"
          >
            Learn more about Arbitrum
          </Button>
        </Flex>
      </Flex>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Quiz</h2>
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
                          onChange={() =>
                            handleAnswerChange(questionIndex, optionIndex)
                          }
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Arbitrum;
