const Test = require('@codewars/test-compat');

describe("tests for inserting a node before another node.", function() {
  it("", function() {
    Test.assertEquals(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
    Test.assertEquals(push(null, 1).next, null, "Should be able to create a new linked list with push().");
    Test.assertEquals(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
    Test.assertEquals(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");
  });
});

describe("tests for building a linked list.", function() {
  it("", function() {
    Test.assertEquals(buildOneTwoThree().data, 1, "Value at index 0 should be 1.");
    Test.assertEquals(buildOneTwoThree().next.data, 2, "Value at index 1 should be 2.");
    Test.assertEquals(buildOneTwoThree().next.next.data, 3, "Value at index 2 should be 3.");
    Test.assertEquals(buildOneTwoThree().next.next.next, null, "Value at index 3 should be null.");
  });
});