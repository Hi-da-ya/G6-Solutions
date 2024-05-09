import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState('');

    const images = [
        'https://img.freepik.com/premium-photo/digital-wonder-with-blue-question-marks_961875-131880.jpg?w=1060',
        'https://img.freepik.com/premium-photo/colorful-number-3-neon-pink-3d-number-rendering_207225-2004.jpg?w=1380',
        'https://img.freepik.com/free-photo/books-with-brain-digital-art-style-education-day_23-2151164351.jpg?t=st=1715231796~exp=1715235396~hmac=5a40f88691ecbd186a91f4e2cd5c0e22d68e02fc37e49698f09e5f8cfc4f1b39&w=1060',
        // Add more images
    ];

    useEffect(() => {
        const fetchQuestions = async () => {
            const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
            const maxAttempts = 5;
            let attempts = 0;

            while (attempts < maxAttempts) {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        if (response.status === 429) {
                            const retryAfter = parseInt(response.headers.get('Retry-After') || '10', 10);
                            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
                            attempts++;
                            continue;
                        }
                        throw new Error('Failed to fetch data');
                    }
                    const data = await response.json();
                    if (data.results) {
                        setQuestions(data.results);
                        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
                        break;
                    } else {
                        throw new Error('No data found');
                    }
                } catch (err) {
                    if (attempts >= maxAttempts - 1) {
                        setError(err.message);
                        setLoading(false);
                        return;
                    }
                    attempts++;
                }
            }
            setLoading(false);
        };

        fetchQuestions();
    }, []);

    useEffect(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, [currentQuestionIndex]);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><div className="loader"></div></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!questions.length) {
        return <div>No questions available.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-2xl font-bold text-center">Quiz Game</h1>
                <div className="container mx-auto my-6">
                    {showScore ? (
                        <div className="text-center">
                            <h2>You scored {score} out of {questions.length}</h2>
                            <button onClick={() => window.location.reload()} className="bg-blue-500 text-white p-2 rounded">Restart Quiz</button>
                        </div>
                    ) : (
                        <div className="bg-white text-black p-4 rounded-lg shadow">
                            <div className="mb-4">
                                <span>Question {currentQuestionIndex + 1}/{questions.length}</span>
                                <h3 dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.question }} />
                            </div>
                            <img src={currentImage} alt="Quiz Visual" className="quiz-image" />

                            <p className="text-sm text-gray-600 mb-4">Test your knowledge with this engaging question!</p>
                            {questions[currentQuestionIndex]?.incorrect_answers && (
                                [...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer]
                                .sort(() => Math.random() - 0.5)  // Shuffle answers
                                .map((answer, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(answer === questions[currentQuestionIndex].correct_answer)}
                                        dangerouslySetInnerHTML={{ __html: answer }}
                                        className="block bg-gray-200 p-2 my-2 w-full text-left"
                                    />
                                ))
                            )}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default QuizPage;
