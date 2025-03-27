# ROS2-Service

## Description
The `ROS2-Service` makes it easy to subscribe to ROS2 Topics published on the PolyScope X Web-Bridge. The service is intended to be used within URCapX Projects created with the PolyScope X SDK https://github.com/UniversalRobots/PolyScopeX_URCap_SDK. The service takes care of correctly setting the QoS Profile and opening a subscription to the topics available: https://docs.universal-robots.com/polyscopex-ros2/v10.7/Appendix/Appendix%202.html

## Installation
To add `ROS2-Service` to your URCapX project it is recommended to create a services directory `src/app/services`

 **Add the service and topics files to your project**:
   - Place `ros2-service.ts` in your `src/app/services` directory.
   - Place `ros2-topics.ts` in your `src/app/services` directory.


## Detailed Steps:
### Import the Service
```typescript
import { Ros2Service } from 'src/app/services/ros2-service';
import { Ros2Topics } from 'src/app/services/ros2-topics';
```
### Inject the Service in the Constructor
Before using the service, you need to initialize it with a `Ros2Client` instance:

```typescript
export class ExampleComponent implements OnChanges {
  constructor(private ros2Service: Ros2Service) {}
```
### Initializing the Service with the ROS2 Client
```typescript
 ngOnChanges(): void {
    // Initialize the ROS2 Service by passing the ROS2Client
    this.ros2Service.initialize(this.applicationAPI.ros2Client);
```
### Creating Subscriptions
To create a subscription to a ROS2 topic, use the `createSubscription` method. Here's an example:

```typescript
    const subscriptionJointStates = this.ros2Service.createSubscription(Ros2Topics.JOINT_STATES).subscribe((msg) => {
      console.log(msg.velocity);
    });
```
## Full Implementation Example

```typescript
import { Component, OnChanges } from '@angular/core';
import { Ros2Service } from 'src/app/services/ros2-service';
import { Ros2Topics } from 'src/app/services/ros2-topics';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnChanges {
  constructor(private ros2Service: Ros2Service) {}

  ngOnChanges(): void {
    // Initialize the ROS2 Service by passing the ROS2Client
    this.ros2Service.initialize(this.applicationAPI.ros2Client);

    // Create a subscription to JOINT_STATES
    const subscriptionJointStates = this.ros2Service.createSubscription(Ros2Topics.JOINT_STATES).subscribe((msg) => {
      console.log(msg.velocity);
    });
    // Create a subscription to ARM_POWERED_ON
    const subscriptionArmPoweredOn = this.ros2Service.createSubscription(Ros2Topics.ARM_POWERED_ON).subscribe((msg) => {
      console.log(msg.data)
    });
  }
}
```

## License
This project is licensed under the MIT License.

---

## Version
Tested with PolyScope X Version 10.8 // SDK Version 15.49.0
